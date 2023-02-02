import React, { Fragment, useState } from "react";
import Header from "../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./../UI/forms/update-movie/updatemovie.module.css";
import Spinner from "../UI/spinner/Spinner";
import { updateUser } from "../../util/http";

export default function UpdateProfile({ user, setShow }) {
  if (!user) {
    return <Spinner />;
  }
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);

  const [loading, setLoading] = useState(false);

  async function updateHandler(e) {
    e.preventDefault();
    const userData = {
      name,
      image,
    };

    try {
      setLoading(true);
      const response = await updateUser(user._id, userData);
      setLoading(false);
      toast.success(response.data.status, {
        position: "top-right",
        autoClose: 500,
      });
      setShow(false);
      console.log(response);
    } catch (err) {
      setLoading(false);
      setShow(false);
      toast.error(err.message);
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <div onClick={() => setShow(false)} className="overlay"></div>
      <section className={classes.section}>
        <div className={classes.container}>
          <Header>Update {user.name}</Header>
          <form onSubmit={updateHandler}>
            <div className={classes.detail}>
              <label>user Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>

            <div className={classes.detail}>
              <label>image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                // value={image}
                type="file"
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
