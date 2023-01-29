import React from "react";
import { moviesList } from "../../data/data";
import MovieList from "../movies/MovieList";
import classes from "./watchlist.module.css";

export default function RecomendedMovies() {
  return (
    <div className={classes.saved}>
      <h1>recommended movies</h1>
      <MovieList movies={moviesList.slice(2, 5)} />
    </div>
  );
}
