const express = require("express");
const reviewController = require("./../controller/review-controller");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(reviewController.setMovieId, reviewController.createReview)
  .get(reviewController.getAllReviews);

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(reviewController.updateReview);

module.exports = router;
