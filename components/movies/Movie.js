import React, { Fragment } from "react";
import Search from "../homepage/search/Search";
import classes from "./movie.module.css";
import MovieList from "./MovieList";

export default function Movie() {
  return (
    <Fragment>
      <Search />
      <section className={classes.section}>
        <MovieList />
      </section>
    </Fragment>
  );
}
