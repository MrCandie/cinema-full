import React, { Fragment } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";
import SavedMovies from "./SavedMovies";
import styles from "../movies/movie.module.css";
import RecomendedMovies from "./recommendedMovies";

export default function Watchlist() {
  return (
    <Fragment>
      <Header />
      <section className={styles.section}>
        <SavedMovies />
        <RecomendedMovies />
      </section>
      <Navigation />
    </Fragment>
  );
}
