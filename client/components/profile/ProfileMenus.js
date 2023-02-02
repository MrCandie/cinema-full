import React, { useContext } from "react";
import Link from "next/link";
import classes from "./profile.module.css";

import { BsTag } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CartContext } from "../../util/Context";

export default function ProfileMenus() {
  const authCtx = useContext(CartContext);
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
      {authCtx.role === "admin" && (
        <Link href="/admin">
          <div className={classes.container}>
            <span>
              <MdOutlineAdminPanelSettings />
            </span>
            <h5>Admin</h5>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
      )}
      <div onClick={() => authCtx.logout()} className={classes.admin}>
        <div className={classes.container}>
          <span>
            <AiOutlineLogout />
          </span>
          <h5>logout</h5>
        </div>
        <span>
          <FaGreaterThan />
        </span>
      </div>
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
