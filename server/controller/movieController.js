const Movie = require("./../model/movieModel");
const catchAsync = require("./../utils/catch-async");
const AppError = require("./../utils/app-error");
const path = require("path");

exports.uploadMovieImage = catchAsync(async (req, res, next) => {
  // console.log(req.files);
  if (!req.files) {
    return next(new AppError("no file uploaded", 400));
  }
  let productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    return next(new AppError("please upload an image", 400));
  }
  const maxSize = 10000000;
  if (productImage.size > maxSize) {
    return next(new AppError("please upload image smaller than 10mb"));
  }

  const imagePath = path.join(
    __dirname,
    "../../client/public/images/movies/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res.status(201).json({
    status: "success",
    image: {
      src: `/images/${productImage.name}`,
    },
  });
});

exports.createMovie = catchAsync(async (req, res, next) => {
  const newMovie = await Movie.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      movie: newMovie,
    },
  });
});

exports.getAllMovies = catchAsync(async (req, res, next) => {
  const movies = await Movie.find();

  res.status(200).json({
    status: "success",
    results: movies.length,
    data: {
      movies,
    },
  });
});

exports.getMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) next(new AppError("Movie not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      movie,
    },
  });
});

exports.updateMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!movie) next(new AppError("Movie not found", 404));
  res.status(200).json({
    status: "success",
    data: {
      movie,
    },
  });
});

exports.deleteMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) next(new AppError("Movie not found", 404));
  res.status(204).json({
    status: "success",
    data: null,
  });
});
