import React, { Fragment, useState } from "react";
import classes from "./checkout.module.css";
import { BsCartFill } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import Cart from "./Cart";
import Seat from "./Seat";
import Payment from "./Payment";

export default function Toggle() {
  const [screen, setScreen] = useState("cart");

  let displayScreen;
  if (screen === "cart") {
    displayScreen = <Cart setScreen={setScreen} />;
  } else if (screen === "seat") {
    displayScreen = <Seat setScreen={setScreen} />;
  } else {
    displayScreen = <Payment />;
  }
  return (
    <Fragment>
      <section className={classes.toggle}>
        <div className={classes.line}></div>
        <button
          // onClick={() => setScreen("cart")}
          className={screen === "cart" ? classes.active : classes.button}
        >
          <BsCartFill />
        </button>
        <button
          // onClick={() => setScreen("seat")}
          className={screen === "seat" ? classes.active : classes.button}
        >
          <MdAirlineSeatLegroomExtra />
        </button>
        <button
          // onClick={() => setScreen("payment")}
          className={screen === "payment" ? classes.active : classes.button}
        >
          <MdPayment />
        </button>
      </section>
      {displayScreen}
    </Fragment>
  );
}
