import React, { Fragment } from "react";
import { moviesList } from "../../data/data";
import Search from "../homepage/search/Search";
import classes from "./movie.module.css";
import MovieList from "./MovieList";

export default function Movie() {
  return (
    <Fragment>
      <Search />
      <section className={classes.section}>
        <MovieList movies={moviesList} />
      </section>
    </Fragment>
  );
}
