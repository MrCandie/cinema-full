import React, { Fragment } from "react";
import Spinner from "../../UI/spinner/Spinner";
import classes from "./review.module.css";

export default function ReviewItem({ reviews }) {
  if (!reviews) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {reviews.reverse().map((item) => {
        return (
          <li key={item.id}>
            <div className={classes.review}>
              <h5>{item.review}</h5>
              <p>Rating: {item.rating}/5</p>
            </div>
            <hr />
            <div className={classes.wrap}>
              <div className={classes.user}>
                {item.user.map((el) => (
                  <p>{el.name}</p>
                ))}
              </div>
              <div className={classes.user}>
                {item.movie.map((el) => (
                  <p>{el.name}</p>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </Fragment>
  );
}
