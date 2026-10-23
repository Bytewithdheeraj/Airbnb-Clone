const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const Payment = require("../models/payment");
const paymentController = require("../controllers/payment");

router.get("/my-trips", isLoggedIn, wrapAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing")
    .sort({ createdAt: -1 });

  res.render("bookings/myTrips.ejs", { bookings });
}));

router.get("/:id/success", isLoggedIn, wrapAsync(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    throw new ExpressError(404, "Booking not found.");
  }

  const booking = await Booking.findOne({
    _id: req.params.id,
    user: req.user._id,
    status: "confirmed",
  }).populate("listing");
  if (!booking) {
    throw new ExpressError(404, "Confirmed booking not found.");
  }

  const payment = await Payment.findOne({ booking: booking._id, status: "paid" });
  if (!payment) {
    throw new ExpressError(404, "Confirmed payment not found.");
  }

  res.render("bookings/success.ejs", { booking, payment });
}));

router.get("/:id/new", isLoggedIn, wrapAsync(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    throw new ExpressError(404, "Listing not found.");
  }

  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    throw new ExpressError(404, "Listing not found.");
  }

  res.render("bookings/new.ejs", { listing });
}));

router.post("/:id", isLoggedIn, wrapAsync(paymentController.createCheckout));

module.exports = router;
