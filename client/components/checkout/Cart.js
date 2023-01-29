import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../../util/Context";
import CartItem from "./CartItem";
import classes from "./checkout.module.css";

export default function Cart({ setScreen }) {
  const movieCtx = useContext(CartContext);

  const totalCost = movieCtx.getTotalCost();

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
    </div>
  );
}
