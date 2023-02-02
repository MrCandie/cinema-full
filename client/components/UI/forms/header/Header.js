import React from "react";

import classes from "./header.module.css";

export default function Header({ children }) {
  return <header className={classes.header}>{children}</header>;
}
