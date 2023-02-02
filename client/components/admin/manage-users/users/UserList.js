import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Spinner from "../../../UI/spinner/Spinner";

import classes from "./user.module.css";

export default function UserList({ user }) {
  const router = useRouter();
  if (!user) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {user.map((item) => (
        <li
          onClick={() => router.push(`/admin/manage-user/${item._id}`)}
          key={item._id}
          className={classes.item}
        >
          <p>
            Name: <span>{item.name ? item.name : "UNKNOWN"}</span>
          </p>
          <p>
            Email: <span>{item.email}</span>{" "}
          </p>
        </li>
      ))}
    </Fragment>
  );
}
