import React, { Fragment } from "react";
import Header from "../homepage/header/Header";
import classes from "../profile/profile.module.css";
import Navigation from "../UI/Navigation/Navigation";
import SettingMenu from "./settingMenu";

export default function Setting() {
  return (
    <Fragment>
      <Header />
      <section className={classes.section}>
        <SettingMenu />
      </section>
      <Navigation />
    </Fragment>
  );
}
