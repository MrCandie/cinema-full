import React, { Fragment, useContext, useEffect, useState } from "react";
import classes from "./review.module.css";
import Header from "../../UI/forms/header/Header";
import { CartContext } from "../../../util/Context";

import { Rating } from "react-simple-star-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createReview, getAllReviews } from "../../../util/http";

export default function Review({ setShow, movie }) {
  const authCtx = useContext(CartContext);
  const user = authCtx.user;

  const [name, setName] = useState(user.name);
  const [review, setReview] = useState("");

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    // setTimeout(() => {
    //   setShow2(true);
    // }, 500);
  };

  async function reviewHandler(e) {
    e.preventDefault();
    const data = {
      name: user.name,
      review,
      rating,
      movie: movie._id,
      user: user._id,
    };
    console.log(data);
    try {
      const response = await createReview(movie._id, data);
      toast.success("Successful");
      setShow(false);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
      setShow(false);
      return;
    }
  }

  return (
    <Fragment>
      <div className="overlay"></div>
      <div className={classes.section}>
        <Header>Drop a review</Header>
        <div className={classes.container}>
          <div className="rate">
            <Rating size={35} onClick={handleRating} />
          </div>
          <form onSubmit={reviewHandler}>
            <div className={classes.detail}>
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                readOnly
              />
            </div>

            <div className={classes.detail}>
              <label>Review</label>
              <input
                onChange={(e) => setReview(e.target.value)}
                value={review}
                type="text"
              />
            </div>
            <div className="action">
              <button onClick={() => setShow(false)} type="button">
                cancel
              </button>
              <button>update</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
