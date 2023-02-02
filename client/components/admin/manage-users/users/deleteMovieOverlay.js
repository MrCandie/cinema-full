import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { deletemovie, deleteUserAdmin } from "../../../../util/http";
import Header from "../../../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "../../../UI/forms/delete-movie/deletemovie.module.css";

export default function DeletemovieOverlay({ setShow, user }) {
  const router = useRouter();
  async function deleteHandler() {
    try {
      const response = await deleteUserAdmin(user._id);
      toast.success(response.data.status, {
        position: "top-right",
        autoClose: 500,
      });
      router.replace("/admin/manage-user");
      setShow(false);
    } catch (err) {
      toast.error("Unknown error occurred. Try again");
      setShow(false);
    }
  }

  return (
    <Fragment>
      <div className="overlay"></div>
      <section className={classes.section}>
        <Header>Are you sure?</Header>
        <div className="action">
          <button onClick={() => setShow(false)}>cancel</button>
          <button onClick={deleteHandler} className="danger">
            DELETE
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={500} />
      </section>
    </Fragment>
  );
}
