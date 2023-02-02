import React, { Fragment, useEffect, useState } from "react";

import classes from "./review.module.css";
import Header from "../../UI/forms/header/Header";
import { CartContext } from "../../../util/Context";
import { getAllReviews } from "../../../util/http";
import ReviewItem from "./ReviewItem";
import Spinner from "../../UI/spinner/Spinner";

export default function LoadReview({ movie, setShow }) {
  const [reviews, setReview] = useState();
  useEffect(() => {
    async function fetchReviews() {
      const review = await getAllReviews(movie._id);
      const allReviews = review.data.data.reviews;
      const filteredReview = allReviews.filter((el) => {
        const movieId = el.movie.find((item) => item)._id;
        return movieId === movie._id;
      });
      setReview(filteredReview);
    }
    fetchReviews();
  }, []);

  if (!reviews) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="overlay"></div>
      <div className={classes.section}>
        <Header>See all reviews</Header>
        <div className={classes.reviewContainer}>
          {reviews.length > 0 ? (
            <ul>
              <ReviewItem reviews={reviews} />
            </ul>
          ) : (
            <div className="center">
              <p>no review found</p>
            </div>
          )}
          <div className="action">
            <button onClick={() => setShow(false)} type="button">
              go back
            </button>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}
