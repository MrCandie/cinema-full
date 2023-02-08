const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const multer = require("multer");

const movieRouter = require("./routes/movieRoute");
const userRouter = require("./routes/user-route");
const reviewRouter = require("./routes/reviewRoute");
const cartRouter = require("./routes/cartRoute");
const watchListRouter = require("./routes/watchlist-route");

const globalErrorController = require("./controller/error-controller");
const AppError = require("./utils/app-error");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use(compression());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/vi/reviews", reviewRouter);
app.use("/api/vi/carts", cartRouter);
app.use("/api/vi/watchlists", watchListRouter);

app.all("*", (req, res, next) => {
  return next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

app.use(globalErrorController);

module.exports = app;
