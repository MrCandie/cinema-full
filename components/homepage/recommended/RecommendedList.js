import React from "react";
import classes from "./recommended.module.css";
import { moviesList } from "../../../data/data";

export default function RecommendedList() {
  return (
    <ul className={classes.list}>
      {moviesList.slice(0, 4).map((item) => (
        <li>
          <div className={classes.image}>
            <img alt="movie" src={item.image} />
          </div>
        </li>
      ))}
    </ul>
  );
}
