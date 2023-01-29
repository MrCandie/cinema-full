import Link from "next/link";
import React from "react";
import classes from "./account.module.css";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <h1>signup</h1>
      <p>please enter your information to signup for our services</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={classes.detail}>
          <label>email address</label>
          <input placeholder="johndoe@email.com" type="email" />
        </div>
        <div className={classes.detail}>
          <label>password</label>
          <input type="password" />
        </div>
        <div className={classes.detail}>
          <label>confirm password</label>
          <input type="password" />
        </div>
        <button onClick={() => router.push("/")}>sign up</button>
      </form>
      <div className={classes.register}>
        <button>sign up with google</button>
      </div>
      <p>
        already have an account? <Link href="/account/login">login</Link>
      </p>
    </section>
  );
}
