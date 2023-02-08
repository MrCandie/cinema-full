import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import classes from "../profile/profile.module.css";

import { FaGreaterThan } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CartContext } from "../../util/Context";
import ChangePassword from "./ChangePassword";

export default function settingMenu() {
  const authCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className={classes.menu}>
        <div onClick={() => setShow(true)} className={classes.admin}>
          <div className={classes.container}>
            <span>
              <RiLockPasswordFill />
            </span>
            <h5>change password</h5>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </div>
      </div>
      {show && <ChangePassword setShow={setShow} />}
    </Fragment>
  );
}
