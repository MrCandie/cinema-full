import React, { Fragment, useContext } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";
import AdminMenus from "./AdminMenu";

import classes from "./../profile/profile.module.css";
import { CartContext } from "../../util/Context";
import Movie from "../movies/Movie";

export default function Admin() {
  const authCtx = useContext(CartContext);
  return (
    <Fragment>
      {authCtx.role === "admin" && (
        <Fragment>
          <Header />
          <main className={classes.section}>
            <AdminMenus />
          </main>
          <Navigation />
        </Fragment>
      )}
    </Fragment>
  );
}
