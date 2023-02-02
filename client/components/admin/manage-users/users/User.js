import React from "react";

import classes from "./user.module.css";
import UserList from "./UserList";

export default function User({ user }) {
  return (
    <ul className={classes.list}>
      <UserList user={user} />
    </ul>
  );
}
