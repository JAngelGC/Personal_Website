import React from "react";
import classes from "./App.module.css";

import MainHeader from "./components/layout/MainHeader";
import Profile from "./components/layout/Profile";

// Pages
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <>
      <div className={classes["box-gradient-ext"]}>
        <div className={classes["box-gradient-int"]}></div>
      </div>
      <div className={classes["container"]}>
        <Profile />
        <div className={classes["container-content"]}>
          <MainHeader />
          <Portfolio />
        </div>
      </div>
    </>
  );
}

export default App;
