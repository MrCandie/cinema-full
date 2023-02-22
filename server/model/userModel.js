const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "user must have an email"],
      unique: true,
      trim: true,
      validate: [validator.isEmail, "please enter a valid email address"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    name: {
      type: String,
      // required: [true, "user must have a name"],
      default: "UNKNOWN",
      trim: true,
    },
    image: {
      type: String,
      default: "/images/default.jpg",
    },
    password: {
      type: String,
      required: [true, "user must have a password"],
      minlength: [8, "password cannot be less than 8 characters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "please confirm your password"],
      // minlength: [8, "password cannot be less than 8 characters"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Password do not match",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified) next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (this.isModified || this.isNew) {
    this.passwordChangedAt = Date.now();
    next();
  }
  next();
});

userSchema.methods.correctPassword = async function (
  enteredPassword,
  password
) {
  return await bcrypt.compare(enteredPassword, password);
};

userSchema.methods.passwordChangedAfter = function (jwtTimeStamp) {
  if (this.passwordChangedAt) {
    const passwordTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(passwordTimeStamp);
    return jwtTimeStamp < passwordTimeStamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return token;
};

const User = mongoose.mongoose.model("User", userSchema);

module.exports = User;
