import React, { Fragment, useContext } from "react";
import Login from "../../components/account/Login";
import Checkout from "../../components/checkout/Checkout";
import { CartContext } from "../../util/Context";

export default function Index() {
  const authCtx = useContext(CartContext);
  return <Fragment>{authCtx.isLoggedIn ? <Checkout /> : <Login />}</Fragment>;
}
