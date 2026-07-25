const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Create Review Route
router.route("/")
    .post(isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.route("/:reviewId")
    .delete(isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;