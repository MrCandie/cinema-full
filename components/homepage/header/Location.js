import React, { Fragment } from "react";
import classes from "./header.module.css";
import { MdArrowDropUp } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function Location({ setShowLoc }) {
  return (
    <Fragment>
      <div onClick={() => setShowLoc(false)} className="overlay"></div>
      <section className={classes.container}>
        <span onClick={() => setShowLoc(false)}>
          <AiOutlineClose />
        </span>
        <h1>
          macon <MdArrowDropUp />
        </h1>
        <div className={classes.lang}>
          <p>stone mountain</p>
          <p>rome</p>
          <p>atlanta</p>
          <p>arabic</p>
          <p>augusta</p>
          <p>macon</p>
        </div>
      </section>
    </Fragment>
  );
}
