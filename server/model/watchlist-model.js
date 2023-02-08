const mongoose = require("mongoose");

const watchListSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  movie: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Movie",
      required: [true, "watchlist must belong to a movie"],
    },
  ],
  user: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "watchlist must belong to a user"],
    },
  ],
});

const WatchList = mongoose.model("WatchList", watchListSchema);

module.exports = WatchList;
