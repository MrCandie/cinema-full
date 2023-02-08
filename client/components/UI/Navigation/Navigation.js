import Link from "next/link";
import React from "react";
import classes from "./navigation.module.css";
import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <Link href="/" className={classes.link}>
        <span>
          <BsHouseDoor />
        </span>
        <h4>home</h4>
      </Link>
      <Link href="/movies" className={classes.link}>
        <span>
          <BsSearch />
        </span>
        <h4>search</h4>
      </Link>
      <Link href="/watchlist" className={classes.link}>
        <span>
          <BsFillBookmarkFill />
        </span>
        <h4>watchlist</h4>
      </Link>
      <Link href="/checkout" className={classes.link}>
        <span>
          <CiShoppingCart />
        </span>
        <h4>orders</h4>
      </Link>
      <Link href="/profile" className={classes.link}>
        <span>
          <AiOutlineUser />
        </span>
        <h4>profile</h4>
      </Link>
    </nav>
  );
}
