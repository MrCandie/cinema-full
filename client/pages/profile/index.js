import React, { Fragment, useContext } from "react";
import Login from "../../components/account/Login";
import Profile from "../../components/profile/Profile";
import { CartContext } from "../../util/Context";

export default function Index() {
  const authCtx = useContext(CartContext);
  return <Fragment>{authCtx.isLoggedIn ? <Profile /> : <Login />}</Fragment>;
}
