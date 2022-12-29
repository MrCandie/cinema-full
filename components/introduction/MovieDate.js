import React from "react";
import Link from "next/link";
import classes from "./introduction.module.css";

export default function MovieDate({ setScreen }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="cinema" src="/images/cinema.svg" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>have a movie date with friends</h1>
        <p>have a drive-in movie experience with your friends and family</p>
        <div className={classes.action}>
          <Link href="/">skip</Link>
          <button onClick={() => setScreen(2)}>next</button>
        </div>
      </div>
    </section>
  );
}
