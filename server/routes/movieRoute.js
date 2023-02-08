const express = require("express");
const movieController = require("./../controller/movieController");
const authController = require("./../controller/authController");
const reviewRouter = require("./../routes/reviewRoute");
const cartRouter = require("./../routes/cartRoute");

const router = express.Router();

router.use("/:movieId/review", reviewRouter);
router.use("/:movieId/cart", cartRouter);

// router.use(authController.protect);
// router.use(authController.restrictTo("admin"));

router
  .route("/")
  .post(movieController.createMovie)
  .get(movieController.getAllMovies);

router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
