import React, { Fragment, useState } from "react";
import { updatemovie } from "../../../../util/http";
import Header from "../header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./updatemovie.module.css";
import Spinner from "../../spinner/Spinner";

export default function UpdateMovie({ data, setShow }) {
  const [price, setPrice] = useState(data.price);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);

  const [loading, setLoading] = useState(false);

  async function updateHandler(e) {
    e.preventDefault();
    const movieData = {
      name,
      price,
      description,
    };

    try {
      setLoading(true);
      const response = await updatemovie(data._id, movieData);
      setLoading(false);
      toast.success(response.data.status, {
        position: "top-right",
        autoClose: 500,
      });
      setShow(false);
      console.log(response.data.status);
    } catch (err) {
      setLoading(false);
      setShow(false);
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <div onClick={() => setShow(false)} className="overlay"></div>
      <section className={classes.section}>
        <div className={classes.container}>
          <Header>Update {data.name}</Header>
          <form onSubmit={updateHandler}>
            <div className={classes.detail}>
              <label>Movie Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
                value={description}
              />
            </div>
            <div className="action">
              <button onClick={() => setShow(false)} type="button">
                cancel
              </button>
              <button>update</button>
            </div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={500} />
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
