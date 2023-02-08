import React, { Fragment, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

import classes from "../manage-users/users/user.module.css";

import Header from "../../UI/forms/header/Header";
import { useRouter } from "next/router";
import Spinner from "../../UI/spinner/Spinner";
import UpdateReview from "./UpdateReview";
import DeletemovieOverlay from "../manage-users/users/deleteMovieOverlay";

export default function ReviewDetails({ review }) {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  if (!review) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <section className={classes.section}>
        <Header>
          <span
            onClick={() => router.push("/admin/manage-reviews")}
            className={classes.arrow}
          >
            <BsArrowLeft />
          </span>
          <h1>Review details</h1>
        </Header>
        <div className={classes.container}>
          <p>
            review: <span>{review.review ? review.review : "UNKNOWN"}</span>
          </p>
          <div className="review">
            <p>
              {review.rating}/5
              <span>
                <AiFillStar />
              </span>
            </p>
          </div>
          {review.movie.map((el) => (
            <p>
              movie: <span>{el.name}</span>
            </p>
          ))}
          {review.user.map((el) => (
            <p>
              user: <span>{el.name}</span>
            </p>
          ))}
        </div>
        <div className="action">
          <button onClick={() => setShow(true)}>update</button>
          <button onClick={() => setShow1(true)} className="danger">
            delete
          </button>
        </div>
      </section>
      {show1 && <DeletemovieOverlay user={review} setShow={setShow1} />}
      {show && <UpdateReview setShow={setShow} reviews={review} />}
    </Fragment>
  );
}
