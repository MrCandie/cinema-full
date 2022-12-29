import React from "react";
import { moviesList } from "../../data/data";
import classes from "./movie.module.css";

export default function MovieList() {
  return (
    <ul className={classes.list}>
      {moviesList.map((item) => (
        <li>
          <div className={classes.image}>
            <img alt="movie" src={item.image} />
          </div>
        </li>
      ))}
    </ul>
  );
}
