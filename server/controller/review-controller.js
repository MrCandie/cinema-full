const Review = require("./../model/reviewMovie");
const AppError = require("../utils/app-error");
const catchAsync = require("./../utils/catch-async");

exports.setMovieId = (req, res, next) => {
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.movieId;
  next();
};

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      review: newReview,
    },
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find()
    .populate({
      path: "movie",
      select: "name",
    })
    .populate({
      path: "user",
      select: "name photo",
    });

  res.status(200).json({
    status: "success",
    data: {
      reviews,
    },
  });
});

exports.getReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id)
    .populate({
      path: "movie",
      select: "name",
    })
    .populate({
      path: "user",
      select: "name photo",
    });

  if (!review) next(new AppError("Review not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});
