const AppError = require("../utils/app-error");
const Cart = require("./../model/cartModel");
const catchAsync = require("./../utils/catch-async");

exports.setMovieId = (req, res, next) => {
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.movieId;
  console.log("working");
  next();
};

exports.postCart = catchAsync(async (req, res, next) => {
  const newCart = await Cart.create(req.body);
  console.log(newCart);

  res.status(201).json({
    status: "success",
    data: {
      cart: newCart,
    },
  });
});

exports.getCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.find()
    .populate({
      path: "movie",
      select: "name price image",
    })
    .populate({
      path: "user",
      select: "name",
    });

  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

exports.updateCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!cart) next(new AppError("Cart not found", 404));
  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
});

exports.deleteCart = catchAsync(async (req, res, next) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);
  if (!cart) next(new AppError("Cart not found", 404));
  res.status(204).json({
    status: "success",
    data: null,
  });
});
