import React, { Fragment, useContext } from "react";
import Link from "next/link";
import classes from "./../profile/profile.module.css";

import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineMovie } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CartContext } from "../../util/Context";

export default function AdminMenus() {
  const authCtx = useContext(CartContext);

  return (
    <Fragment>
      <div className={classes.menu}>
        <Link href="/admin/upload">
          <div className={classes.container}>
            <span>
              <AiOutlineCloudUpload />
            </span>
            <h5>Upload movie</h5>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>
        <Link href="/admin/manage-user">
          <div className={classes.container}>
            <span>
              <AiOutlineUsergroupAdd />
            </span>
            <h5>manage users</h5>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>

        <Link href="/admin/manage-reviews">
          <div className={classes.container}>
            <span>
              <MdOutlineReviews />
            </span>
            <h5>reviews</h5>
          </div>
          <span>
            <FaGreaterThan />
          </span>
        </Link>

        <Link href="">
          <div className={classes.container}>
            <span>
              <MdOutlineMovie />
            </span>
            <h5>manage movies</h5>
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
    </Fragment>
  );
}
