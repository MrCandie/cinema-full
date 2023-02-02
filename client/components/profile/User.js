import Image from "next/image";
import React, { Fragment, useState } from "react";
import classes from "./profile.module.css";
import UpdateProfile from "./UpdateProfile";

export default function User({ user }) {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={classes.user}>
        <h1>profile</h1>
        <main>
          <div className={classes.picture}>
            <Image width={100} height={100} src={user.image} alt={user.name} />
          </div>
          <div className={classes.details}>
            <h4>{user.name}</h4>
            <h5>{user.email}</h5>
          </div>
        </main>
        <button onClick={() => setShow(true)}>edit profile</button>
      </div>
      {show && <UpdateProfile setShow={setShow} user={user} />}
    </Fragment>
  );
}
