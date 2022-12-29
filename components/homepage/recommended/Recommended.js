import Link from "next/link";
import React from "react";
import classes from "./recommended.module.css";
import RecommendedList from "./RecommendedList";

export default function Recommended() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>recommended for you</h1>
        <Link href="/movies">see all</Link>
      </div>
      <RecommendedList />
    </section>
  );
}
