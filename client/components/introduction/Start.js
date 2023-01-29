import React from "react";
import Link from "next/link";
import classes from "./introduction.module.css";

export default function Start() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img alt="cinema" src="/images/seat.svg" />
        </div>
      </div>
      <div className={classes.content}>
        <h1>select your preferred movie seat</h1>
        <p>have a drive-in movie experience with your friends and family</p>
        <div className={classes.start}>
          <Link href="/account/register">get started</Link>
        </div>
      </div>
    </section>
  );
}
