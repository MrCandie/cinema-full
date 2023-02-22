import React, { Fragment, useContext, useState } from "react";
import classes from "../movies/review/review.module.css";
import Header from "../UI/forms/header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassword, updatePassword } from "../../util/auth";
import Spinner from "../UI/spinner/Spinner";
import { CartContext } from "../../util/Context";

export default function ChangePassword({ setShow }) {
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const userCtx = useContext(CartContext);

  async function passwordHandler(e) {
    e.preventDefault();

    if (!password || !passwordConfirm || !currentPassword) {
      toast.error("password fields cannot be empty");
      return;
    }

    const data = {
      password,
      passwordConfirm,
      currentPassword,
    };

    try {
      setLoading(true);
      const response = await updatePassword(userCtx.userId, data);

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
              <label>enter current password</label>
              <input
                placeholder="********"
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
                type="password"
              />
            </div>
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
              <button disabled={loading}>
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && <Spinner />}
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
