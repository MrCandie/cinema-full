import React, { useRef } from "react";

import classes from "../../homepage/search/search.module.css";

export default function Search() {
  const searchRef = useRef();

  function searchHandler(e) {
    e.preventDefault();
  }

  return (
    <section className={classes.form}>
      <form onSubmit={searchHandler}>
        <input ref={searchRef} type="search" placeholder="Search user" />
      </form>
    </section>
  );
}
