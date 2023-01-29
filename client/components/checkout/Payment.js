import { useRouter } from "next/router";
import React from "react";
import classes from "./checkout.module.css";

export default function Payment() {
  const router = useRouter();
  return (
    <section className={classes.payment}>
      <form>
        <div className={classes.select}>
          <label>full name</label>
          <input type="text" placeholder="John doe" />
        </div>
        <div className={classes.select}>
          <label>email address</label>
          <input type="email" placeholder="Johndoe@gmail.com" />
        </div>
        <div className={classes.select}>
          <label>amount</label>
          <input type="text" placeholder="John doe" />
        </div>
        <div className="action">
          <button type="button" onClick={() => router.replace("/success")}>
            Pay
          </button>
        </div>
      </form>
    </section>
  );
}
