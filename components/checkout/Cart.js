import React from "react";
import CartItem from "./CartItem";
import classes from "./checkout.module.css";

export default function Cart({ setScreen }) {
  return (
    <div>
      <CartItem />
      <div className={classes.total}>
        <p>total</p>
        <p>$15</p>
      </div>
      <div className="action">
        <button onClick={() => setScreen("seat")}>book ticket</button>
      </div>
    </div>
  );
}
