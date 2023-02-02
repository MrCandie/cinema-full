import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../homepage/header/Header";
import Navigation from "../UI/Navigation/Navigation";
import User from "./User";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./profile.module.css";
import ProfileMenus from "./ProfileMenus";
import { getUser } from "../../util/http";
import { CartContext } from "../../util/Context";

export default function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(CartContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser(authCtx.userId);
        setUser(response.data.data.user);
      } catch (err) {
        setLoading(false);
        setShow(false);
        toast.error(err.message);
        console.log(err.message);
      }
    }
    fetchUser();
  }, [user]);

  return (
    <Fragment>
      <Header />
      <main className={classes.section}>
        <User user={user} />
        <ProfileMenus />
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navigation />
    </Fragment>
  );
}
