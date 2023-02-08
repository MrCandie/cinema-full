import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { CartContext } from "../../util/Context";
import CartItem from "./CartItem";
import classes from "./checkout.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCarts } from "../../util/http";

export default function Cart({ setScreen }) {
  const movieCtx = useContext(CartContext);
  const totalCost = movieCtx.getTotalCost();

  useEffect(() => {
    async function getCart() {
      try {
        const response = await getAllCarts(movieCtx.userId);
        if (response.status === 200) {
          const cartData = response.data.data.cart;
          const userCart = cartData.filter((item) => {
            const user = item.user.find((el) => el);
            return user._id === movieCtx.userId;
          });
          movieCtx.setCartItem(userCart);
        } else {
          throw new Error("An unknown error occurred...Try again");
        }
      } catch (err) {
        console.log(err);
        toast.error("An unknown error occurred...Try again");
        return;
      }
    }
    getCart();
  }, []);

  return (
    <div>
      {movieCtx.items.length === 0 ? (
        <div className="empty">
          <p>Empty cart!</p>
          <Link href="/movies">Buy a ticket for your favorite movie</Link>
        </div>
      ) : (
        <CartItem />
      )}
      <div className={classes.total}>
        <p>total</p>
        <p>N{totalCost}</p>
      </div>
      <div className="action">
        <button
          disabled={movieCtx.items.length === 0}
          onClick={() => setScreen("seat")}
        >
          book ticket
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
