import React, { Fragment, useContext } from "react";
import Login from "../../components/account/Login";
import Admin from "../../components/admin/Admin";
import { CartContext } from "../../util/Context";

export default function index() {
  const authCtx = useContext(CartContext);
  return <Fragment>{authCtx.isLoggedIn ? <Admin /> : <Login />}</Fragment>;
}
