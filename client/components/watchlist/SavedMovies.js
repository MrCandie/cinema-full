import Link from "next/link";
import React, { useContext } from "react";
import { moviesList } from "../../data/data";
import { CartContext } from "../../util/Context";
import MovieList from "../movies/MovieList";
import Spinner from "../UI/spinner/Spinner";
import classes from "./watchlist.module.css";

export default function SavedMovies() {
  const movieCtx = useContext(CartContext);
  // console.log(movieCtx.list);

  const movArr = [];
  movieCtx.list.map((item) => {
    const movieArr = item.movie;
    const movies = movieArr.forEach((el) => movArr.push(el));
  });

  if (!movArr) {
    return <Spinner />;
  }

  return (
    <div className={classes.saved}>
      <h1>saved movies</h1>
      {movArr.length > 0 ? (
        <MovieList movies={movArr} />
      ) : (
        <div className="empty">
          <p>Watchlist empty</p>
          <Link href="/movies">Add watchlist</Link>
        </div>
      )}
    </div>
  );
}
