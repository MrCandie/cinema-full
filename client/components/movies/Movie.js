import React, { Fragment, useEffect, useState } from "react";
import { moviesList } from "../../data/data";
import Search from "../homepage/search/Search";
import classes from "./movie.module.css";
import MovieList from "./MovieList";

export default function Movie() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(moviesList);
  }, [setList]);
  return (
    <Fragment>
      <Search movies={list} setMovies={setList} />
      <section className={classes.section}>
        <MovieList movies={list} />
      </section>
    </Fragment>
  );
}
