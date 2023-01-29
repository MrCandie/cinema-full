import React, { useContext } from "react";
import classes from "./movie.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";
import Spinner from "../UI/spinner/Spinner";
import { CartContext } from "../../util/Context";

export default function MovieDetail({ data }) {
  const movieContext = useContext(CartContext);
  const router = useRouter();
  if (!data) {
    return <Spinner />;
  }
  // console.log(data);
  return (
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
          <div className={classes.star}>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
          </div>
          <p>53 reviews</p>
        </div>
        <div className={classes.description}>
          <h4>description</h4>
          <p>{data.description}</p>
        </div>
        <div className={classes.cast}>
          <h4>casts</h4>
          <div className={classes.wrapper}>
            {data.cast.map((item, i) => (
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
      </div>
    </section>
  );
}
