import React, { Fragment, useState } from "react";
import { updatemovie, updateUserAdmin } from "../../../../util/http";
import Header from "../../../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./../../../UI/forms/update-movie/updatemovie.module.css";
import Spinner from "../../../UI/spinner/Spinner";

export default function UpdateUser({ user, setShow }) {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const [loading, setLoading] = useState(false);

  async function updateHandler(e) {
    e.preventDefault();
    const userData = {
      name,
      email,
      role,
    };

    try {
      setLoading(true);
      const response = await updateUserAdmin(user._id, userData);
      setLoading(false);
      toast.success(response.data.status, {
        position: "top-right",
        autoClose: 500,
      });
      setShow(false);
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
              <label>email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>role</label>
              <input onChange={(e) => setRole(e.target.value)} value={role} />
            </div>
            <div className="action">
              <button onClick={() => setShow(false)} type="button">
                cancel
              </button>
              <button>update</button>
            </div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
