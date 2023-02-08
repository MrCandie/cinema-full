const WatchList = require("./../model/watchlist-model");
const catchAsync = require("./../utils/catch-async");
const AppError = require("./../utils/app-error");

exports.createWatchList = catchAsync(async (req, res, next) => {
  const newWatch = await WatchList.create(req.body);
  console.log(newWatch);

  res.status(201).json({
    status: "success",
    data: {
      list: newWatch,
    },
  });
});

exports.getAllWatchList = catchAsync(async (req, res, next) => {
  const watchLists = await WatchList.find().populate("movie").populate({
    path: "user",
    select: "name photo",
  });

  res.status(200).json({
    status: "success",
    data: {
      lists: watchLists,
    },
  });
});

exports.deleteWatchList = catchAsync(async (req, res, next) => {
  const list = await WatchList.findByIdAndDelete(req.params.id);
  if (!list) next(new AppError("Movie not found", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
