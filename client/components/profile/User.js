import Image from "next/image";
import React from "react";
import classes from "./profile.module.css";

export default function User() {
  return (
    <div className={classes.user}>
      <h1>profile</h1>
      <main>
        <div className={classes.picture}>
          <Image
            width={100}
            height={100}
            src="/images/user.jpg"
            alt="profile-picture"
          />
        </div>
        <div className={classes.details}>
          <h4>John Doe</h4>
          <h5>johndoe@gmail.com</h5>
        </div>
      </main>
      <button>edit profile</button>
    </div>
  );
}
