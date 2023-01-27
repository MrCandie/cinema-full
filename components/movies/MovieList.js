import React from "react";
import { moviesList } from "../../data/data";
import classes from "./movie.module.css";
import { useRouter } from "next/router";

export default function MovieList({ movies }) {
  const router = useRouter();
  return (
    <ul className={classes.list}>
      {movies.map((item) => (
        <li onClick={() => router.push(`/movies/${item.id}`)}>
          <div className={classes.image}>
            <img alt="movie" src={item.image} />
          </div>
        </li>
      ))}
    </ul>
  );
}
