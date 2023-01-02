import React from "react";
import classes from "./checkout.module.css";

const seatNum = [
  7, 10, 11, 12, 13, 25, 29, 35, 36, 37, 38, 45, 53, 67, 68, 69, 70, 75, 76, 77,
  78, 79, 83, 87, 92, 93, 94, 98,
];

export default function Seat({ setScreen }) {
  return (
    <section className={classes.seat}>
      <div className={classes.select}>
        <label>select movie theatre location</label>
        <select>
          <option value="ozone cinema">ozone cinema</option>
        </select>
      </div>
      <div className={classes.choose}>
        <h1>select your preferred seat</h1>
        <div className={classes.number}>
          {seatNum.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className={classes.description}>
        <h4>description</h4>
        <p>
          the 76th seat is located at the L wing of thr movie theatre at the
          first row with a number indication
        </p>
      </div>
      <div className="action">
        <button onClick={() => setScreen("payment")}>continue</button>
      </div>
    </section>
  );
}
