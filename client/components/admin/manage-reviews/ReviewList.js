import React from "react";
import Spinner from "../../UI/spinner/Spinner";

import { AiFillStar } from "react-icons/ai";

import classes from "../manage-users/users/user.module.css";
import { useRouter } from "next/router";

export default function ReviewList({ reviews }) {
  const router = useRouter();
  if (!reviews) {
    return <Spinner />;
  }
  return (
    <ul className={classes.list}>
      {reviews.map((item) => (
        <li
          onClick={() => router.push(`/admin/manage-reviews/${item._id}`)}
          key={item._id}
          className={classes.item}
        >
          <p>
            Review: <span>{item.review ? item.review : "UNKNOWN"}</span>
          </p>

          <div className="review">
            <p>
              {item.rating}
              <span>
                <AiFillStar />
              </span>
            </p>
          </div>
          {item.movie.map((el) => (
            <p key={el._id}>
              movie: <span>{el.name}</span>
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}
