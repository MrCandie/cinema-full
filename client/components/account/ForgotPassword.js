import React, { Fragment, useState } from "react";
import classes from "../movies/review/review.module.css";
import Header from "../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassword } from "../../util/auth";
import Spinner from "../UI/spinner/Spinner";

export default function ForgotPassword({ setShow }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function passwordHandler(e) {
    e.preventDefault();

    if (!email) {
      toast.error("Email field cannot be empty");
      return;
    }

    const data = {
      email,
    };

    try {
      setLoading(true);
      const response = await forgotPassword(data);
      setLoading(false);
      toast.success(response.data.message);
      setShow(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response.data.message);
      setShow(false);
      return;
    }
  }
  return (
    <Fragment>
      <div className="overlay"></div>
      <div className={classes.section}>
        <Header>Send a password reset request</Header>
        <div className={classes.container}>
          <form onSubmit={passwordHandler}>
            <div className={classes.detail}>
              <label>email address</label>
              <input
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </div>

            <div className="action">
              <button onClick={() => setShow(false)} type="button">
                cancel
              </button>
              <button>{loading ? "Loading..." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
      {loading && <Spinner />}
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
