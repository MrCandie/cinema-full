const AppError = require("./../utils/app-error");

const User = require("./../model/userModel");
const catchAsync = require("./../utils/catch-async");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) next(new AppError("User not found", 404));
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const body = {
    name: req.body.name,
    image: req.body.image,
  };
  const user = await User.findByIdAndUpdate(req.params.id, body, {
    new: true,
    runValidator: true,
  });

  if (!user) next(new AppError("User not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updateUserAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  if (!user) next(new AppError("User not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUserAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) next(new AppError("User not found", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
