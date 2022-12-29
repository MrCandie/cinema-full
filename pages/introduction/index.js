import React, { Fragment, useState } from "react";
import DriveIn from "../../components/introduction/DriveIn";
import MovieDate from "../../components/introduction/MovieDate";
import Start from "../../components/introduction/Start";

export default function Index() {
  const [screen, setScreen] = useState(1);

  let displayScreen;

  if (screen === 1) {
    displayScreen = <MovieDate setScreen={setScreen} />;
  } else if (screen === 2) {
    displayScreen = <DriveIn setScreen={setScreen} />;
  } else if (screen === 3) {
    displayScreen = <Start />;
  }

  return <Fragment>{displayScreen}</Fragment>;
}
