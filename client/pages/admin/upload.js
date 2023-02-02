import React, { Fragment, useContext } from "react";
import Uploadmovie from "../../components/admin/upload/Uploadmovie";
import Login from "../../components/account/Login";
import { CartContext } from "../../util/Context";

export default function Upload() {
  const authCtx = useContext(CartContext);
  return (
    <Fragment>{authCtx.isLoggedIn ? <Uploadmovie /> : <Login />}</Fragment>
  );
}
