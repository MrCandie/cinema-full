import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./ticket.module.css";
import TicketItem from "./TicketItem";
import { getAllTickets } from "../../util/auth";
import { CartContext } from "../../util/Context";
import Link from "next/link";

export default function Ticket() {
  const [tickets, setTickets] = useState([]);

  const movieCtx = useContext(CartContext);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await getAllTickets();
        const ticketData = response.data.data.tickets;
        const userTicket = ticketData.filter((item) => {
          const user = item.user.find((el) => el);

          return user._id === movieCtx.userId;
        });
        setTickets(userTicket);
      } catch (err) {
        setLoading(false);
        console.log(err);
        toast.error("An unknown error occurred...Try again");
        return;
      }
    }
    fetchTickets();
  }, []);
  return (
    <Fragment>
      <Header />
      <main className={classes.section}>
        {tickets.length > 0 ? (
          <TicketItem tickets={tickets} />
        ) : (
          <div className="empty">
            <p>no tickets found!</p>
            <Link href="">book a ticket</Link>
          </div>
        )}
      </main>
      <Navigation />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
