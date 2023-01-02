import React from "react";
import classes from "./checkout.module.css";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartItem() {
  return (
    <div className={classes.cart}>
      <div className={classes.image}>
        <img alt="cart" src="/images/movie2.jfif" />
      </div>
      <div className={classes.content}>
        <h4>triple</h4>
        <div className={classes.add}>
          <span>
            <MdAdd />
          </span>
          <p>1</p>
          <span>
            <AiOutlineMinus />
          </span>
        </div>
        <h5>$15</h5>
      </div>
    </div>
  );
}
