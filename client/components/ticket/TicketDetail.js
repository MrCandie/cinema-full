import React, { Fragment, useState } from "react";

import classes from "./ticket.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Spinner from "../UI/spinner/Spinner";
import TicketReview from "./TicketReview";
import { useRouter } from "next/router";

export default function TicketDetail({ ticket }) {
  if (!ticket) {
    return <Spinner />;
  }
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={classes.section}>
        <div className={classes.head}>
          <span onClick={() => router.replace(`/ticket`)}>
            <BsArrowLeft />
          </span>
          <span onClick={() => setShow(true)}>
            <BsThreeDotsVertical />
          </span>
        </div>
        <h1>your ticket purchase was successful</h1>
        <div className={classes.number}>
          <p>Number of tickets:</p>
          <p>{ticket.quantity}</p>
        </div>
        <div className={classes.number}>
          <p>Total:</p>
          <p>#{ticket.totalCost}</p>
        </div>
        <div className={classes.movies}>
          <h1>Movie</h1>
          <ul className={classes.detail}>
            {ticket.cart.map((item) => {
              const movArr = [];
              const movieArr = item.movie;
              const movies = movieArr.forEach((el) => movArr.push(el));
              const date = new Date(item.createdAt);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const hour = date.getHours();
              const minute = date.getMinutes();
              return (
                <>
                  {movArr.map((el) => {
                    return (
                      <li>
                        <div className={classes.image}>
                          <img src={el.image} />
                        </div>
                        <div className={classes.content}>
                          <p>{el.name}</p>
                          <span>
                            {" "}
                            {`${day}/${month}/${year}`} {`${hour}:${minute}`}
                          </span>
                        </div>
                        <div className={classes.amount}>
                          <p>#{el.price}</p>
                        </div>
                      </li>
                    );
                  })}
                </>
              );
            })}
          </ul>
        </div>
        {show && <TicketReview setShow={setShow} />}
      </div>
    </Fragment>
  );
}
