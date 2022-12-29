import React, { Fragment } from "react";
import Header from "../../components/homepage/header/Header";
import Movie from "../../components/movies/Movie";
import Navigation from "../../components/UI/Navigation/Navigation";

export default function Index() {
  return (
    <Fragment>
      <Header />
      <Movie />
      <Navigation />
    </Fragment>
  );
}
