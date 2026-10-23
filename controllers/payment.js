const crypto = require("crypto");
const mongoose = require("mongoose");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const Payment = require("../models/payment");
const ExpressError = require("../utils/ExpressError");
const getRazorpay = require("../utils/razorpay");
const { sendBookingConfirmation } = require("../utils/sendMail");

const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

function parseDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value
    ? null
    : date;
}

async function sendConfirmationEmail(payment, booking, user, req) {
  if (payment.confirmationEmailSentAt) {
    return true;
  }

  try {
    await sendBookingConfirmation({
      to: user.email,
      username: user.username,
      booking,
      listing: booking.listing,
      payment,
    });
    payment.confirmationEmailSentAt = new Date();
    await payment.save();
    return true;
  } catch (error) {
    console.error("Booking is confirmed, but its confirmation email could not be sent:", error);
    req.flash(
      "error",
      "Your booking is confirmed, but the confirmation email could not be sent. Please check your email settings or contact support."
    );
    return false;
  }
}

module.exports.createCheckout = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    throw new ExpressError(404, "Listing not found.");
  }

  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    throw new ExpressError(404, "Listing not found.");
  }

  const checkIn = parseDate(req.body.checkIn);
  const checkOut = parseDate(req.body.checkOut);
  const guests = Number(req.body.guests);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  if (
    !checkIn ||
    !checkOut ||
    checkIn < today ||
    checkOut <= checkIn ||
    typeof req.body.guests !== "string" ||
    !/^\d+$/.test(req.body.guests) ||
    !Number.isSafeInteger(guests) ||
    guests < 1
  ) {
    throw new ExpressError(400, "Choose valid dates and at least one guest.");
  }

  const pricePerNight = Number(listing.price);
  if (!Number.isFinite(pricePerNight) || pricePerNight <= 0) {
    throw new ExpressError(400, "This listing does not have a valid price.");
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new ExpressError(503, "Online payments are temporarily unavailable.");
  }

  const nights = (checkOut.getTime() - checkIn.getTime()) / oneDayInMilliseconds;
  const amount = Math.round(nights * pricePerNight * 100);
  if (!Number.isSafeInteger(amount) || amount <= 0) {
    throw new ExpressError(400, "The booking total is invalid.");
  }

  const booking = new Booking({
    listing: listing._id,
    user: req.user._id,
    checkIn,
    checkOut,
    guests,
    totalPrice: amount / 100,
    status: "pending",
  });

  const order = await getRazorpay().orders.create({
    amount,
    currency: "INR",
    receipt: `booking_${booking._id}`,
    notes: { bookingId: booking._id.toString() },
  });

  try {
    await booking.save();
    await new Payment({
      booking: booking._id,
      user: req.user._id,
      razorpayOrderId: order.id,
      amount,
      currency: "INR",
      status: "pending",
    }).save();
  } catch (error) {
    await Booking.deleteOne({ _id: booking._id, status: "pending" });
    throw error;
  }

  res.render("payments/checkout.ejs", {
    booking,
    listing,
    order,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    user: req.user,
  });
};

module.exports.verifyPayment = async (req, res) => {
  const {
    bookingId,
    razorpay_order_id: orderId,
    razorpay_payment_id: paymentId,
    razorpay_signature: signature,
  } = req.body;
  if (
    !mongoose.isValidObjectId(bookingId) ||
    typeof orderId !== "string" ||
    typeof paymentId !== "string" ||
    typeof signature !== "string" ||
    !/^[a-f\d]{64}$/i.test(signature)
  ) {
    throw new ExpressError(400, "The payment details are invalid.");
  }

  const payment = await Payment.findOne({
    booking: bookingId,
    user: req.user._id,
    razorpayOrderId: orderId,
  });
  if (!payment) {
    throw new ExpressError(404, "Payment order not found.");
  }

  const booking = await Booking.findOne({ _id: bookingId, user: req.user._id })
    .populate("listing");
  if (!booking) {
    throw new ExpressError(404, "Booking not found.");
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new ExpressError(503, "Payment verification is temporarily unavailable.");
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest();
  const receivedSignature = Buffer.from(signature, "hex");
  if (!crypto.timingSafeEqual(expectedSignature, receivedSignature)) {
    throw new ExpressError(400, "Payment verification failed.");
  }

  if (payment.status === "paid") {
    if (payment.razorpayPaymentId !== paymentId) {
      throw new ExpressError(409, "This booking has already been paid.");
    }
    if (booking.status !== "confirmed") {
      booking.status = "confirmed";
      await booking.save();
    }
    await sendConfirmationEmail(payment, booking, req.user, req);
    return res.redirect(`/bookings/${booking._id}/success`);
  }

  if (booking.status !== "pending") {
    throw new ExpressError(409, "This booking is no longer awaiting payment.");
  }

  const razorpay = getRazorpay();
  let providerPayment = await razorpay.payments.fetch(paymentId);
  if (
    providerPayment.order_id !== orderId ||
    Number(providerPayment.amount) !== payment.amount ||
    providerPayment.currency !== payment.currency
  ) {
    throw new ExpressError(400, "Razorpay has not confirmed this payment.");
  }

  if (providerPayment.status === "authorized") {
    providerPayment = await razorpay.payments.capture(
      paymentId,
      payment.amount,
      payment.currency
    );
  }
  if (providerPayment.status !== "captured") {
    throw new ExpressError(400, "Razorpay has not captured this payment.");
  }

  payment.razorpayPaymentId = paymentId;
  payment.signature = signature;
  payment.status = "paid";
  await payment.save();

  booking.status = "confirmed";
  await booking.save();

  if (await sendConfirmationEmail(payment, booking, req.user, req)) {
    req.flash("success", "Your booking is confirmed.");
  }
  res.redirect(`/bookings/${booking._id}/success`);
};

module.exports.paymentFailed = async (req, res) => {
  const { bookingId, orderId } = req.body;
  if (!mongoose.isValidObjectId(bookingId) || typeof orderId !== "string") {
    throw new ExpressError(400, "The payment details are invalid.");
  }

  const payment = await Payment.findOne({
    booking: bookingId,
    user: req.user._id,
    razorpayOrderId: orderId,
  }).populate("booking");

  if (!payment || !payment.booking) {
    throw new ExpressError(404, "Payment order not found.");
  }

  if (payment.status === "paid") {
    return res.redirect(`/bookings/${payment.booking._id}/success`);
  }

  payment.status = "failed";
  await payment.save();
  res.render("payments/failed.ejs", {
    booking: payment.booking,
    listing: await Listing.findById(payment.booking.listing),
  });
};