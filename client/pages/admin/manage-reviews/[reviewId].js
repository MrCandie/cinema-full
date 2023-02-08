import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import ReviewDetails from "../../../components/admin/manage-reviews/ReviewDetails";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllReviews, getReview } from "../../../util/http";
import Header from "../../../components/homepage/header/Header";

export default function RevDetails() {
  const [review, setReview] = useState("");
  const router = useRouter();
  const revId = router.query.reviewId;

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await getAllReviews(revId);
        setReview(response.data.data.reviews.find((el) => el._id === revId));
      } catch (err) {
        console.log(err);
        toast.error("An unknown error occurred...Try again ");
        return;
      }
    }
    fetchReview();
  }, [review]);

  return (
    <Fragment>
      <Header />
      <ReviewDetails review={review} />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
