const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      default: 0,
    },
    movie: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: [true, "cart must belong to a movie"],
      },
    ],
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "cart must belong to a user"],
      },
    ],
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

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
