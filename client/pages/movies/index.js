import React, { Fragment, useContext } from "react";
import Login from "../../components/account/Login";
import Header from "../../components/homepage/header/Header";
import Movie from "../../components/movies/Movie";
import Navigation from "../../components/UI/Navigation/Navigation";
import { CartContext } from "../../util/Context";

export default function Index() {
  const authCtx = useContext(CartContext);
  return (
    <>
      {authCtx.isLoggedIn ? (
        <Fragment>
          <Movie />
        </Fragment>
      ) : (
        <Login />
      )}
    </>
  );
}
