import Link from "next/link";
import React, { useRef, useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../util/auth";
import { CartContext } from "../../util/Context";

import classes from "./account.module.css";

export default function Login() {
  const authCtx = useContext(CartContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginHandler(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      email,
      password,
    };

    try {
      const user = await login(data);
      console.log(user);
      if (user.status === 200) {
        authCtx.login(
          user.data.token,
          user.data.data.user.role,
          user.data.data.user._id,
          user.data.data.user
        );
        toast.success("login successful");

        return;
      }
      throw new Error(user.message);
    } catch (err) {
      toast.error(err.message);
      return;
    }
  }
  return (
    <section className={classes.section}>
      <h1>login</h1>
      <p>please enter your information to login for our services</p>
      <form onSubmit={loginHandler}>
        <div className={classes.detail}>
          <label>email address</label>
          <input ref={emailRef} placeholder="johndoe@email.com" type="email" />
        </div>
        <div className={classes.detail}>
          <label>password</label>
          <input ref={passwordRef} type="password" />
          <p>Forgot password?</p>
        </div>
        <button>log in</button>
      </form>
      <div className={classes.register}>
        <button>sign in with google</button>
      </div>
      <p>
        don't have an account? <Link href="/account/register">Signup</Link>
      </p>
      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}
