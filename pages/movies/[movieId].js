import React, { Fragment } from "react";
import MovieDetail from "../../components/movies/MovieDetail";
import { useRouter } from "next/router";
import { moviesList } from "../../data/data";

export default function Moviedetail() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const movieData = moviesList.find((item) => item.id === movieId);
  return (
    <Fragment>
      <MovieDetail data={movieData} />
    </Fragment>
  );
}
