import React, { Fragment } from "react";
import Toggle from "./Toggle";
import classes from "./checkout.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  return (
    <section className={classes.section}>
      <span onClick={() => router.replace("/movies")} className="arrow">
        <BsArrowLeft />
      </span>
      <Toggle />
    </section>
  );
}
