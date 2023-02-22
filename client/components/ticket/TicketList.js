import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Spinner from "../UI/spinner/Spinner";
import classes from "./ticket.module.css";

export default function TicketList({ tickets }) {
  if (!tickets) {
    return <Spinner />;
  }
  const router = useRouter();
  return (
    <Fragment>
      {tickets.map((item) => {
        const date = new Date(item.createdAt);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();

        const movArr = [];
        item.cart.map((item) => {
          const movieArr = item.movie;
          const movies = movieArr.forEach((el) => movArr.push(el));
        });
        // const formattedDate = ;
        return (
          <li
            key={item._id}
            onClick={() => router.replace(`/ticket/${item._id}`)}
          >
            <div className={classes.image}>
              <img src="/images/movie.jpg" />
            </div>
            <div className={classes.content}>
              <p>
                {item.quantity} {item.quantity > 1 ? "tickets" : "ticket"}{" "}
                bought
              </p>
              <span>
                {`${day}/${month}/${year}`} {`${hour}:${minute}`}
              </span>
            </div>
            <div className={classes.amount}>
              <p>#{item.totalCost}</p>
            </div>
          </li>
        );
      })}
    </Fragment>
  );
}
