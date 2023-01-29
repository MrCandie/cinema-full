import React, { useRef } from "react";
import classes from "./search.module.css";

export default function Search({ movies, setMovies }) {
  const searchRef = useRef();
  function searchHandler(e) {
    e.preventDefault();
    const enteredSearch = searchRef.current.value;
    if (!enteredSearch) {
      return;
    }
    const filteredMovies = movies.filter((item) =>
      item.name.includes(enteredSearch.trim().toLowerCase())
    );
    setMovies(filteredMovies);
  }
  return (
    <section className={classes.form}>
      <form onSubmit={searchHandler}>
        <input
          ref={searchRef}
          type="search"
          placeholder="Search for movie name, genre or theatre"
        />
      </form>
    </section>
  );
}
