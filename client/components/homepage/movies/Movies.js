import React from "react";
import MovieList from "./MovieList";
import classes from "./movies.module.css";

export default function Movies() {
  return (
    <section className={classes.section}>
      <h1>movies for the week</h1>
      <MovieList />
    </section>
  );
}
