import React from "react";
import classes from "./success.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <span onClick={() => router.replace("/movies")} className={classes.arrow}>
        <BsArrowLeft />
      </span>
      <div className={classes.check}>
        <span>
          <BsCheckLg />
        </span>
      </div>
      <div className={classes.content}>
        <h4>payment successful</h4>
        <p>
          your ticket purchase has been successful, check your email inbox for
          your ticket and receipt. it's fun time
        </p>
      </div>
      <div className="action">
        <button onClick={() => router.replace("/movies")}>
          explore more movies
        </button>
      </div>
    </section>
  );
}
