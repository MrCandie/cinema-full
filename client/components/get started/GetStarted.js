import React from "react";
import classes from "./getstarted.module.css";
import { MdOutlineMovie } from "react-icons/md";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span>
          <MdOutlineMovie />
        </span>
        <h1>cinema</h1>
        <p>movie for everyone</p>
        <div className={classes.action}>
          <Link href="/introduction">get started</Link>
        </div>
      </div>
    </section>
  );
}
