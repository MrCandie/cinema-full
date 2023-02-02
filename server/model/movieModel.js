const mongoose = require("mongoose");
const slugify = require("slugify");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "movie must have a name"],
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price cannot be less than 0"],
    },
    description: {
      type: String,
      required: [true, "movie must have a description"],
      trim: true,
    },
    time: String,
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating cannot be below 1"],
      max: [5, "Rating cannot be above 5"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    slug: String,
    image: String,
    casts: Array,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

movieSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "movie",
  localField: "_id",
});

movieSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
