import React, { Fragment, useContext, useEffect, useState } from "react";
import { moviesList } from "../../data/data";
import { CartContext } from "../../util/Context";
import { getAllMovies } from "../../util/http";
import Header from "../homepage/header/Header";
import Search from "../homepage/search/Search";
import Navigation from "../UI/Navigation/Navigation";
import Spinner from "../UI/spinner/Spinner";
import classes from "./movie.module.css";
import MovieList from "./MovieList";

export default function Movie() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const response = await getAllMovies();
        setLoading(false);
        setList(response.data.data.movies);
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    }
    getMovies();
  }, [setList]);
  return (
    <Fragment>
      <Header />
      <Search movies={list} setMovies={setList} />
      <section className={classes.section}>
        <MovieList movies={list} />
      </section>
      <Navigation />
      {loading && <Spinner />}
    </Fragment>
  );
}
