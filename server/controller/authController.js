const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const AppError = require("./../utils/app-error");

const User = require("./../model/userModel");
const catchAsync = require("./../utils/catch-async");
const sendEmail = require("./../utils/email");

const createJsonToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = createJsonToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000
    ),
    // secure: true,
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  return res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  //check if theres email and password
  const { email, password } = req.body;
  if (!email || !password)
    next(new AppError("Please enter a valid email and password to login", 400));

  const user = await User.findOne({ email: email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  //extract token from header
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token)
    next(new AppError("You are not logged in. Login to continue", 401));

  // validate token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // user decoded.id to find user
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) next(new AppError("user does not longer exist", 401));

  if (currentUser.passwordChangedAfter(decoded.iat))
    next(
      new AppError("User recently changed password, Login again to continue")
    );

  req.user = currentUser;
  next();
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      return next(
        new AppError(
          "You do not have permission to perform this operation",
          403
        )
      );
    }
    next();
  };

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) next(new AppError("Invalid email address. Try again!", 400));

  const token = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${token}`;

  const message = `Forgot your passsord? Submit a PATCH request with your new password and passwordConfirm to ${resetUrl}\nIf you didn't forget your password, please ignore this email`;

  try {
    await sendEmail({
      subject: "Password reset (valid for 10minutes)",
      email: user.email,
      message,
    });
    res.status(200).json({
      status: "success",
      message: "reset token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError("There was an error sending the email, Try again later", 500)
    );
  }
  next();
});
