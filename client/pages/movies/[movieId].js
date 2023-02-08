import React, { Fragment, useContext, useEffect, useState } from "react";
import MovieDetail from "../../components/movies/MovieDetail";
import { useRouter } from "next/router";
import { moviesList } from "../../data/data";
import { getAllMovies, getWatchlists } from "../../util/http";
import { CartContext } from "../../util/Context";

export default function Moviedetail() {
  const [movie, setMovie] = useState();
  const router = useRouter();
  const movieId = router.query.movieId;
  const movieCtx = useContext(CartContext);

  const [isList, setIsList] = useState(false);
  const [listId, setListId] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const movieData = await getAllMovies();
        const response = await getWatchlists();
        const listData = response.data.data.lists;

        const userList = listData.filter((item) => {
          const user = item.user.find((el) => el);
          return user._id === movieCtx.userId;
        });

        movieCtx.setWatchlist(userList);
        const movieDetail = movieData.data.data.movies;
        const filteredMovie = movieDetail.find(
          (movie) => movie._id === movieId
        );
        setMovie(filteredMovie);

        const lists = movieCtx.list;

        lists.map((el) => {
          const movie = el.movie;
          const movIds = movie?.map((item) => item._id);
          const listIsWatchlist = movIds.includes(movieId);
          setIsList(listIsWatchlist);
        });

        const watchlistId = userList.find((item) => {
          const movie = item.movie.find((el) => el);
          return movie._id === movieId;
        });
        setListId(watchlistId._id);
      } catch (err) {
        console.log(err.message);
      }
    }
    getMovie();
  }, [movie]);

  return (
    <Fragment>
      <MovieDetail listId={listId} isList={isList} data={movie} />
    </Fragment>
  );
}
