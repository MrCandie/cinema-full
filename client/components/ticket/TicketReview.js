import React from "react";
import classes from "./ticket.module.css";

export default function TicketReview({ setShow }) {
  return (
    <div onClick={() => setShow(false)} className={classes.review}>
      <div className={classes.describe}>
        <button>Describe your movie experience</button>
      </div>
    </div>
  );
}
