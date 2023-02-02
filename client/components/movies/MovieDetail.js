import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";

import { Rating } from "react-simple-star-rating";

import classes from "./movie.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import Spinner from "../UI/spinner/Spinner";
import { CartContext } from "../../util/Context";
import UpdateMovie from "../UI/forms/update-movie/UpdateMovie";
import Deletemovie from "../UI/forms/delete-movie/Deletemovie";
import Review from "./review/Review";
import LoadReview from "./review/LoadReview";

export default function MovieDetail({ data }) {
  const movieContext = useContext(CartContext);
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const role = movieContext.role;

  if (!data) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <section className={classes.movie}>
        <div className={classes.images}>
          <img alt="movie image" src={data.image} />
          <div className={classes.menu}>
            <span onClick={() => router.replace("/movies")}>
              <BsArrowLeft />
            </span>
            <span>
              <BsBookmark />
            </span>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            <h4>{data.name}</h4>
            <p>N{data.price}</p>
          </div>
          <div className={classes.rating}>
            <div className="review">
              <p>
                {data.ratingsAverage}
                <span>
                  <AiFillStar />
                </span>
              </p>
              <p>
                {data.ratingsQuantity > 0
                  ? `${data.ratingsQuantity} reviews`
                  : "No reviews"}
              </p>
            </div>
          </div>
          <div className="action">
            <button onClick={() => setShow2(true)}>add review</button>

            <button onClick={() => setShow3(true)}>see reviews</button>
          </div>
          <div className={classes.description}>
            <h4>description</h4>
            <p>{data.description}</p>
          </div>
          <div className={classes.cast}>
            <h4>casts</h4>
            <div className={classes.wrapper}>
              {data.casts.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
          <div className="action">
            <button
              onClick={() => {
                movieContext.addOneToCart(data.id);
                router.push("/checkout");
              }}
            >
              book ticket
            </button>
          </div>
          {role === "admin" && (
            <div className="action">
              <button onClick={() => setShow(true)} className="warning">
                Update movie
              </button>
              <button onClick={() => setShow1(true)} className="danger">
                delete movie
              </button>
            </div>
          )}
        </div>
      </section>
      {show && <UpdateMovie setShow={setShow} data={data} />}
      {show1 && <Deletemovie data={data} setShow={setShow1} />}
      {show2 && <Review setShow={setShow2} movie={data} />}
      {show3 && <LoadReview setShow={setShow3} movie={data} />}
    </Fragment>
  );
}
