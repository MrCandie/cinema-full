import React, { Fragment, useContext } from "react";
import Register from "../../components/account/Register";
import Movie from "../../components/movies/Movie";
import { CartContext } from "../../util/Context";

export default function Registers() {
  const authCtx = useContext(CartContext);
  return <Fragment>{!authCtx.isLoggedIn ? <Register /> : <Movie />}</Fragment>;
}
