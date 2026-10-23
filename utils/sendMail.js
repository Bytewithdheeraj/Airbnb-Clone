const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    dateStyle: "medium",
    timeZone: "UTC",
  });
}

async function sendBookingConfirmation({ to, username, booking, listing, payment }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Set EMAIL_USER and EMAIL_PASS to enable confirmation emails.");
  }
  if (!to) {
    throw new Error("The booking user's email address is missing.");
  }

  const guestName = username || "there";
  const listingTitle = listing ? listing.title : "Your stay";
  const location = listing
    ? [listing.location, listing.country].filter(Boolean).join(", ")
    : "";
  const amount = (payment.amount / 100).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const checkIn = formatDate(booking.checkIn);
  const checkOut = formatDate(booking.checkOut);

  return transporter.sendMail({
    from: `"Airbnb Stays" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Booking confirmed: ${listingTitle}`,
    text: [
      `Hi ${guestName},`,
      "",
      "Your payment was verified and your booking is confirmed.",
      `Stay: ${listingTitle}`,
      location ? `Location: ${location}` : "",
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut}`,
      `Guests: ${booking.guests}`,
      `Amount paid: INR ${amount}`,
      `Booking reference: ${booking._id}`,
      `Razorpay payment ID: ${payment.razorpayPaymentId}`,
      "",
      "Thank you for booking with Airbnb Stays.",
    ].filter(Boolean).join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px">
        <h1 style="color:#ff385c;font-size:24px">Booking confirmed</h1>
        <p>Hi ${escapeHtml(guestName)},</p>
        <p>Your payment was verified and your stay is confirmed.</p>
        <div style="border:1px solid #e5e5e5;border-radius:12px;padding:20px;margin:20px 0">
          <h2 style="font-size:18px;margin:0 0 8px">${escapeHtml(listingTitle)}</h2>
          ${location ? `<p style="color:#717171;margin:0 0 16px">${escapeHtml(location)}</p>` : ""}
          <p><strong>Check-in:</strong> ${escapeHtml(checkIn)}</p>
          <p><strong>Check-out:</strong> ${escapeHtml(checkOut)}</p>
          <p><strong>Guests:</strong> ${escapeHtml(booking.guests)}</p>
          <p><strong>Amount paid:</strong> INR ${escapeHtml(amount)}</p>
          <p><strong>Booking reference:</strong> ${escapeHtml(booking._id)}</p>
          <p><strong>Payment ID:</strong> ${escapeHtml(payment.razorpayPaymentId)}</p>
        </div>
        <p>Thank you for booking with Airbnb Stays.</p>
      </div>
    `,
  });
}

module.exports = {
  transporter,
  sendBookingConfirmation,
};