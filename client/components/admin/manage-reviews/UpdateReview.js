import React, { Fragment, useState } from "react";

import Header from "../../UI/forms/header/Header";
import Spinner from "../../UI/spinner/Spinner";

import { Rating } from "react-simple-star-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "../../UI/forms/update-movie/updatemovie.module.css";
import { updateReview } from "../../../util/http";

export default function UpdateReview({ reviews, setShow }) {
  const [review, setReview] = useState(reviews.review);
  const [rating, setRating] = useState(reviews.rating);

  const [loading, setLoading] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  async function reviewHandler(e) {
    e.preventDefault();
    const reviewData = {
      review,
      rating,
    };

    try {
      setLoading(true);
      const response = await updateReview(reviews._id, reviewData);
      setLoading(false);
      toast.success(response.data.status, {
        position: "top-right",
        autoClose: 500,
      });
      setShow(false);
    } catch (err) {
      setLoading(false);
      setShow(false);
      toast.error(err.message);
      console.log(err);
    }
  }

  return (
    <Fragment>
      <div onClick={() => setShow(false)} className="overlay"></div>
      <section className={classes.section}>
        <div className={classes.container}>
          <Header>Update review</Header>
          <form onSubmit={reviewHandler}>
            <div className="rate">
              <Rating size={30} onClick={handleRating} />
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
        <ToastContainer position="top-right" autoClose={2000} />
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
