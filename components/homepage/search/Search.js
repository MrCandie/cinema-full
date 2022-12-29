import React from "react";
import classes from "./search.module.css";

export default function Search() {
  return (
    <section className={classes.form}>
      <form>
        <input
          type="search"
          placeholder="Search for movie name, genre or theatre"
        />
      </form>
    </section>
  );
}
