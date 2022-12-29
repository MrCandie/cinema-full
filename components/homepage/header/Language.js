import React, { Fragment } from "react";
import classes from "./header.module.css";
import { MdArrowDropUp } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function Language({ setShowLang }) {
  return (
    <Fragment>
      <div onClick={() => setShowLang(false)} className="overlay"></div>
      <section className={classes.container}>
        <span onClick={() => setShowLang(false)}>
          <AiOutlineClose />
        </span>
        <h1>
          english <MdArrowDropUp />
        </h1>
        <div className={classes.lang}>
          <p>french</p>
          <p>spanish</p>
          <p>korean</p>
          <p>arabic</p>
          <p>english</p>
          <p>yoruba</p>
        </div>
      </section>
    </Fragment>
  );
}
