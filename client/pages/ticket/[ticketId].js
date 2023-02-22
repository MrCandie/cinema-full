import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import TicketDetail from "../../components/ticket/TicketDetail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllTickets } from "../../util/auth";
import Header from "../../components/homepage/header/Header";

export default function TicketDetails() {
  const router = useRouter();
  const id = router.query.ticketId;
  const [ticket, setTicket] = useState("");
  useEffect(() => {
    async function getTicket() {
      try {
        const response = await getAllTickets();
        const ticketList = response.data.data.tickets.find(
          (item) => item._id === id
        );
        setTicket(ticketList);
      } catch (err) {
        // setLoading(false);
        console.log(err);
        toast.error("An unknown error occurred...Try again");
        return;
      }
    }
    getTicket();
  }, []);
  return (
    <Fragment>
      <Header />
      <TicketDetail ticket={ticket} />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
