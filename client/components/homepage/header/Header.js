import React, { Fragment, useState } from "react";
import classes from "./header.module.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import Language from "./Language";
import Location from "./Location";

export default function Header() {
  const [showLang, setShowLang] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  return (
    <Fragment>
      <section className={classes.section}>
        <button onClick={() => setShowLang(true)}>
          English <MdOutlineArrowDropDown />
        </button>
        <button onClick={() => setShowLoc(true)}>
          nigeria <GoLocation />
        </button>
      </section>
      {showLang && <Language setShowLang={setShowLang} />}
      {showLoc && <Location setShowLoc={setShowLoc} />}
    </Fragment>
  );
}
