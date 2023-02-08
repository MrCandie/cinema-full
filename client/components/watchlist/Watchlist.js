import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";
import SavedMovies from "./SavedMovies";
import styles from "../movies/movie.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getWatchlists } from "../../util/http";
import { CartContext } from "../../util/Context";

export default function Watchlist() {
  const [data, setData] = useState([]);

  const movieCtx = useContext(CartContext);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await getWatchlists();
        const listData = response.data.data.lists;

        const userList = listData.filter((item) => {
          const user = item.user.find((el) => el);
          return user._id === movieCtx.userId;
        });

        movieCtx.setWatchlist(userList);
      } catch (err) {
        console.log(err);
        toast.error("An unknown error occurred...Try again!.");
        return;
      }
    }
    fetchList();
  }, [data]);

  return (
    <Fragment>
      <Header />
      <section className={styles.section}>
        <SavedMovies />
      </section>
      <Navigation />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
