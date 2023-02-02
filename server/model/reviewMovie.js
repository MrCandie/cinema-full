const mongoose = require("mongoose");
const Movie = require("./../model/movieModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review cannot be empty"],
      maxlength: [20, "review cannot be longer than 20 characters"],
    },
    rating: {
      type: Number,
      max: [5, "Rating cannot be greater than 5"],
      min: [1, "Rating cannot be less than 1"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    movie: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: [true, "Review must belong to a movie"],
      },
    ],
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Review must belong to a user"],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.statics.calcAverageRatings = async function (movieId) {
  const stats = await this.aggregate([
    {
      $match: { movie: movieId },
    },
    {
      $group: {
        _id: "$movie",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(stats);
  await Movie.findByIdAndUpdate(movieId, {
    ratingsAverage: stats[0].avgRating,
    ratingsQuantity: stats[0].nRating,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.movie);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
