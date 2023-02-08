const express = require("express");
const watchListController = require("./../controller/watchlist-controller");

const router = express.Router();

router
  .route("/")
  .get(watchListController.getAllWatchList)
  .post(watchListController.createWatchList);

router.route("/:id").delete(watchListController.deleteWatchList);

module.exports = router;
