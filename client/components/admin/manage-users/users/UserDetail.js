import React, { Fragment, useState } from "react";
import Header from "../../../UI/forms/header/Header";
import Spinner from "../../../UI/spinner/Spinner";

import { BsArrowLeft } from "react-icons/bs";

import classes from "./user.module.css";
import { useRouter } from "next/router";
import UpdateUser from "./UpdateUser";
import DeletemovieOverlay from "./deleteMovieOverlay";

export default function UserDetail({ user }) {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  if (!user) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <section className={classes.section}>
        <Header>
          <span
            onClick={() => router.push("/admin/manage-user")}
            className={classes.arrow}
          >
            <BsArrowLeft />
          </span>
          <h1>User's details</h1>
        </Header>
        <div className={classes.container}>
          <p>
            Name: <span>{user.name ? user.name : "UNKNOWN"}</span>
          </p>
          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Role: <span>{user.role}</span>{" "}
          </p>
        </div>
        <div className="action">
          <button onClick={() => setShow(true)}>update</button>
          <button onClick={() => setShow1(true)} className="danger">
            delete
          </button>
        </div>
      </section>
      {show1 && <DeletemovieOverlay user={user} setShow={setShow1} />}
      {show && <UpdateUser setShow={setShow} user={user} />}
    </Fragment>
  );
}
