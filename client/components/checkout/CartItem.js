import React, { Fragment, useContext } from "react";
import classes from "./checkout.module.css";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../../util/Context";

export default function CartItem() {
  const movieContext = useContext(CartContext);
  return (
    <Fragment>
      {movieContext.items.map((item) => (
        <div className={classes.image}>
          <div className={classes.cart}>
            <img alt="cart" src={item.image} />
          </div>
          <div className={classes.content}>
            <h4>{item.name}</h4>
            <div className={classes.add}>
              <span onClick={() => movieContext.addOneToCart(item.id)}>
                <MdAdd />
              </span>
              <p>{item.quantity}</p>
              <span onClick={() => movieContext.removeOneFromCart(item.id)}>
                <AiOutlineMinus />
              </span>
            </div>
            <h5>N{item.price}</h5>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
