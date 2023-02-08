import React, { Fragment, useContext } from "react";
import classes from "./checkout.module.css";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../../util/Context";
import Spinner from "../UI/spinner/Spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartItem() {
  const movieContext = useContext(CartContext);

  if (!movieContext.items) {
    return <Spinner />;
  }
  const movArr = [];

  return (
    <Fragment>
      {movieContext.items.map((item) => {
        const movieArr = item.movie;
        const movie = movieArr?.forEach((item) => movArr.push(item));
        return (
          <>
            {movArr ? (
              movArr.map((el) => (
                <Fragment>
                  <div key={el.id} className={classes.image}>
                    <div className={classes.cart}>
                      <img alt="cart" src={el.image} />
                    </div>
                    <div className={classes.content}>
                      <h4>{el.name}</h4>
                      <div className={classes.add}>
                        <span
                          onClick={() => {
                            movieContext.addOneToCart(el.id);
                            toast.success("One item added to cart");
                          }}
                        >
                          <MdAdd />
                        </span>
                        <p>{item.quantity}</p>
                        <span
                          onClick={() => {
                            movieContext.removeOneFromCart(el.id);
                            toast.success("One item removed from cart");
                          }}
                        >
                          <AiOutlineMinus />
                        </span>
                      </div>
                      <h5>N{el.price}</h5>
                    </div>
                  </div>
                </Fragment>
              ))
            ) : (
              <Spinner />
            )}
          </>
        );
      })}
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
