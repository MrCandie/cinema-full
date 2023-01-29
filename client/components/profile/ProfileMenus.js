import React from "react";
import Link from "next/link";
import classes from "./profile.module.css";

import { BsTag } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

export default function ProfileMenus() {
  return (
    <div className={classes.menu}>
      <Link href="">
        <div className={classes.container}>
          <span>
            <BsTag />
          </span>
          <h5>ticket history</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </Link>
      <Link href="">
        <div className={classes.container}>
          <span>
            <AiOutlineBell />
          </span>
          <h5>notification</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </Link>
      <Link href="">
        <div className={classes.container}>
          <span>
            <TfiWorld />
          </span>
          <h5>languages</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </Link>
      <Link href="">
        <div className={classes.container}>
          <span>
            <AiOutlineLogout />
          </span>
          <h5>logout</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </Link>
      <Link href="">
        <div className={classes.container}>
          <span>
            <AiFillSetting />
          </span>
          <h5>settings</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </Link>
    </div>
  );
}
