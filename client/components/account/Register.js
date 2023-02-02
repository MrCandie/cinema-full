import Link from "next/link";
import React, { useContext, useRef } from "react";
import classes from "./account.module.css";
import { useRouter } from "next/router";
import { register } from "../../util/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../util/Context";

export default function Register() {
  const router = useRouter();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const authCtx = useContext(CartContext);

  async function signup(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredPasswordConfirm = passwordConfirmRef.current.value;

    // if (!enteredEmail || !enteredPassword || !enteredPasswordConfirm) {
    //   return;
    // }
    const data = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
      passwordConfirm: enteredPasswordConfirm,
    };
    try {
      const user = await register(data);
      if (user.status === "success") {
        authCtx.login(user.token, user.data.user.role, user.data.user._id);
        toast.success("Sign up successful");
        console.log(user);
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
      <h1>signup</h1>
      <p>please enter your information to signup for our services</p>
      <form onSubmit={signup}>
        <div className={classes.detail}>
          <label>name</label>
          <input ref={nameRef} placeholder="john doe" type="text" />
        </div>
        <div className={classes.detail}>
          <label>email address</label>
          <input ref={emailRef} placeholder="johndoe@email.com" type="email" />
        </div>
        <div className={classes.detail}>
          <label>password</label>
          <input ref={passwordRef} type="password" />
        </div>
        <div className={classes.detail}>
          <label>confirm password</label>
          <input ref={passwordConfirmRef} type="password" />
        </div>
        <button>sign up</button>
      </form>
      <div className={classes.register}>
        <button>sign up with google</button>
      </div>
      <p>
        already have an account? <Link href="/account/login">login</Link>
      </p>
      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}
