import Link from "next/link";
import React, { useRef, useContext, Fragment, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../util/auth";
import { CartContext } from "../../util/Context";
import Spinner from "../UI/spinner/Spinner";

import classes from "./account.module.css";
import ForgotPassword from "./ForgotPassword";

export default function Login() {
  const authCtx = useContext(CartContext);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginHandler(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error("Email or password field cannot be empty");
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      setLoading(true);
      const user = await login(data);
      if (user.status === 200) {
        setLoading(false);
        toast.success("login successful");
        authCtx.login(
          user.data.token,
          user.data.data.user.role,
          user.data.data.user._id,
          user.data.data.user
        );
        return;
      }
      throw new Error(user.message);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.response?.data.message || "Something went wrong");
      return;
    }
  }
  return (
    <Fragment>
      <section className={classes.section}>
        <h1>login</h1>
        <p>please enter your information to login for our services</p>
        <form onSubmit={loginHandler}>
          <div className={classes.detail}>
            <label>email address</label>
            <input
              ref={emailRef}
              placeholder="johndoe@email.com"
              type="email"
            />
          </div>
          <div className={classes.detail}>
            <label>password</label>
            <input ref={passwordRef} type="password" />
            <p onClick={() => setShow(true)}>Forgot password?</p>
          </div>
          <button disabled={loading}>
            {loading ? "Loading..." : "log in"}
          </button>
        </form>
        <div className={classes.register}>
          <button>sign in with google</button>
        </div>
        <p>
          don't have an account? <Link href="/account/register">Signup</Link>
        </p>
        <ToastContainer position="top-right" autoClose={2000} />
      </section>
      {show && <ForgotPassword setShow={setShow} />}
      {loading && <Spinner />}
    </Fragment>
  );
}
