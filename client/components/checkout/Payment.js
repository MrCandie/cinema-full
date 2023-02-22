import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { CartContext } from "../../util/Context";
import classes from "./checkout.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTicket } from "../../util/auth";

export default function Payment() {
  const router = useRouter();
  const movieCtx = useContext(CartContext);
  const ticketAmount = movieCtx.getTotalCost();
  const user = movieCtx.user;
  const cartData = movieCtx.items;

  const quantity = cartData.map((item) => item.quantity);
  const totalQuantity = quantity.reduce((acc, sum) => acc + sum, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false);

  async function paymentHandler(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      amount,
    };

    const ticketData = {
      cart: cartData,
      user: movieCtx.userId,
      quantity: totalQuantity,
      totalCost: ticketAmount,
    };

    try {
      setLoading(true);
      const response = await createTicket(movieCtx.userId, ticketData);
      setLoading(false);
      toast.success("Payment successful");
      router.replace("/success");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("An unknown error occurred...Try again");
      return;
    }
  }

  return (
    <section className={classes.payment}>
      <form onSubmit={paymentHandler}>
        <div className={classes.select}>
          <label>full name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={user.name}
            type="text"
            placeholder="John doe"
          />
        </div>
        <div className={classes.select}>
          <label>email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={user.email}
            type="email"
            placeholder="Johndoe@gmail.com"
          />
        </div>
        <div className={classes.select}>
          <label>amount</label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={ticketAmount}
            readOnly
            type="text"
            placeholder="John doe"
          />
        </div>
        <div className="action">
          <button disabled={loading}>{loading ? "Loading..." : "Pay"}</button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}
