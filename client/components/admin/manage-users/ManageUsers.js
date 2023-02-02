import React, { Fragment, useEffect, useState } from "react";
import Header from "../../homepage/header/Header";
import Navigation from "../../UI/Navigation/Navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./manageuser.module.css";
import Search from "./Search";
import { getAllUsers } from "../../../util/http";
import User from "./users/User";

export default function ManageUsers() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await getAllUsers();
        setUser(response.data.data.users);
      } catch (err) {
        // setLoading(false);
        toast.error(err.message);
        return;
      }
    }
    fetchUsers();
  }, [user]);

  return (
    <Fragment>
      <Header />
      <Search />
      <section className={classes.section}>
        <User user={user} />
      </section>
      <Navigation />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
