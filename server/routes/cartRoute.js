const express = require("express");

const cartController = require("./../controller/cartController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(cartController.setMovieId, cartController.postCart)
  .get(cartController.getCart);

module.exports = router;

router
  .route("/:id")
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);
