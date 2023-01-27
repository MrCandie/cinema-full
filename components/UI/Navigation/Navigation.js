import Link from "next/link";
import React from "react";
import classes from "./navigation.module.css";
import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.link}>
        <span>
          <BsHouseDoor />
        </span>
        <Link href="/">home</Link>
      </div>
      <div className={classes.link}>
        <span>
          <BsSearch />
        </span>
        <Link href="/movies">search</Link>
      </div>
      <div className={classes.link}>
        <span>
          <BsFillBookmarkFill />
        </span>
        <Link href="/watchlist">watchlist</Link>
      </div>
      <div className={classes.link}>
        <span>
          <AiOutlineUser />
        </span>
        <Link href="/profile">profile</Link>
      </div>
    </nav>
  );
}
