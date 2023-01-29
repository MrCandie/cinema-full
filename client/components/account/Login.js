import Link from "next/link";
import React from "react";
import classes from "./account.module.css";

export default function Login() {
  return (
    <section className={classes.section}>
      <h1>login</h1>
      <p>please enter your information to login for our services</p>
      <form>
        <div className={classes.detail}>
          <label>email address</label>
          <input placeholder="johndoe@email.com" type="email" />
        </div>
        <div className={classes.detail}>
          <label>password</label>
          <input type="password" />
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
    </section>
  );
}
