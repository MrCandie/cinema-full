import React, { Fragment, useEffect, useState } from "react";
import Header from "../../homepage/header/Header";
import Navigation from "../../UI/Navigation/Navigation";
import ReviewList from "./ReviewList";
import Search from "./Search";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllReviews, getAllReviewsAdmin } from "../../../util/http";

export default function Reviews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await getAllReviews();
        setData(response.data.data.reviews);
      } catch (err) {
        console.log(err);
        toast.error("An unknown error occurred...Try again!.");
        return;
      }
    }
    fetchReviews();
  }, []);
  return (
    <Fragment>
      <Header />
      <Search />
      <section className="section">
        <ReviewList reviews={data} />
      </section>
      <Navigation />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
