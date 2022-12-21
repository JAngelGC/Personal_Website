import React from "react";
import classes from "./App.module.css";

import MainHeader from "./components/MainHeader";
import Profile from "./components/layout/Profile";

function App() {
  return (
    <>
      <div className={classes["box-gradient-ext"]}>
        <div className={classes["box-gradient-int"]}></div>
      </div>
      <div className={classes["container"]}>
        <Profile />
        <MainHeader />
      </div>
    </>
  );
}

export default App;
