const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const paymentController = require("../controllers/payment");
const wrapAsync = require("../utils/wrapAsync");

router.post("/verify", isLoggedIn, wrapAsync(paymentController.verifyPayment));
router.post("/failed", isLoggedIn, wrapAsync(paymentController.paymentFailed));

module.exports = router;