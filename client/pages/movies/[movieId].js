import React, { Fragment, useEffect, useState } from "react";
import MovieDetail from "../../components/movies/MovieDetail";
import { useRouter } from "next/router";
import { moviesList } from "../../data/data";
import { getAllMovies } from "../../util/http";

export default function Moviedetail() {
  const [movie, setMovie] = useState();
  const router = useRouter();
  const movieId = router.query.movieId;
  useEffect(() => {
    async function getMovie() {
      try {
        const movieData = await getAllMovies();
        const movieDetail = movieData.data.data.movies;
        const filteredMovie = movieDetail.find(
          (movie) => movie._id === movieId
        );
        setMovie(filteredMovie);
      } catch (err) {
        console.log(err.message);
      }
    }
    getMovie();
  }, [movie]);

  return (
    <Fragment>
      <MovieDetail data={movie} />
    </Fragment>
  );
}
