import React from "react";
import { moviesList } from "../../data/data";
import classes from "./movie.module.css";
import { useRouter } from "next/router";
import Spinner from "../UI/spinner/Spinner";

export default function MovieList({ movies }) {
  const router = useRouter();
  if (!movies) {
    return <Spinner />;
  }
  return (
    <ul className={classes.list}>
      {movies.map((item, i) => (
        <li key={i} onClick={() => router.push(`/movies/${item.id}`)}>
          <div className={classes.image}>
            <img alt="movie" src={item.image} />
          </div>
        </li>
      ))}
    </ul>
  );
}
