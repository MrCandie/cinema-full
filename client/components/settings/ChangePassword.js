import React, { Fragment, useState } from "react";
import classes from "../movies/review/review.module.css";
import Header from "../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassword } from "../../util/auth";
import Spinner from "../UI/spinner/Spinner";

export default function ChangePassword({ setShow }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function passwordHandler(e) {
    e.preventDefault();

    if (!password || passwordConfirm) {
      toast.error("password fields cannot be empty");
      return;
    }

    const data = {
      password,
      passwordConfirm,
    };

    try {
      setLoading(true);

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
        <Header>change password</Header>
        <div className={classes.container}>
          <form onSubmit={passwordHandler}>
            <div className={classes.detail}>
              <label>enter new password</label>
              <input
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>
            <div className={classes.detail}>
              <label>confirm new password</label>
              <input
                placeholder="********"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
                type="password"
              />
            </div>

            <div className="action">
              <button onClick={() => setShow(false)} type="button">
                cancel
              </button>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {loading && <Spinner />}
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
