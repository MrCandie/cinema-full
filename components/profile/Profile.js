import React, { Fragment } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";
import User from "./User";

import classes from "./profile.module.css";
import ProfileMenus from "./ProfileMenus";

export default function Profile() {
  return (
    <Fragment>
      <Header />
      <main className={classes.section}>
        <User />
        <ProfileMenus />
      </main>
      <Navigation />
    </Fragment>
  );
}
