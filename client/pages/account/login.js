import React, { Fragment, useContext } from "react";
import Login from "../../components/account/Login";
import Movie from "../../components/movies/Movie";
import { CartContext } from "../../util/Context";

export default function Logins() {
  const authCtx = useContext(CartContext);

  return <Fragment>{!authCtx.isLoggedIn ? <Login /> : <Movie />}</Fragment>;
}
