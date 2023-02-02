const Review = require("./../model/reviewMovie");
const catchAsync = require("./../utils/catch-async");

exports.setTourUserId = (req, res, next) => {
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.movieId;
  next();
};

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);
  console.log(newReview);

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
