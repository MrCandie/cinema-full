const express = require("express");
const reviewController = require("./../controller/review-controller");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(reviewController.setTourUserId, reviewController.createReview)
  .get(reviewController.getAllReviews);

module.exports = router;
