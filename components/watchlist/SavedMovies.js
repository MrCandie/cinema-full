import React from "react";
import { moviesList } from "../../data/data";
import MovieList from "../movies/MovieList";
import classes from "./watchlist.module.css";

export default function SavedMovies() {
  return (
    <div className={classes.saved}>
      <h1>saved movies</h1>
      <MovieList movies={moviesList.slice(0, 4)} />
    </div>
  );
}
