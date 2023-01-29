import React from "react";
import classes from "./recommended.module.css";
import { moviesList } from "../../../data/data";
import { useRouter } from "next/router";

export default function RecommendedList() {
  const router = useRouter();
  return (
    <ul className={classes.list}>
      {moviesList.slice(0, 4).map((item, i) => (
        <li key={i} onClick={() => router.push(`/movies/${item.id}`)}>
          <div className={classes.image}>
            <img alt="movie" src={item.image} />
          </div>
        </li>
      ))}
    </ul>
  );
}
