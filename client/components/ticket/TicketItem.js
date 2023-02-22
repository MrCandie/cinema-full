import React from "react";
import classes from "./ticket.module.css";
import TicketList from "./TicketList";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

export default function TicketItem({ tickets }) {
  const router = useRouter();
  return (
    <div className={classes.ticket}>
      <div className="review">
        <span onClick={() => router.replace("/profile")}>
          <BsArrowLeft />
        </span>
        <h1>Ticketing history</h1>
      </div>
      <ul className={classes.list}>
        <TicketList tickets={tickets} />
      </ul>
    </div>
  );
}
