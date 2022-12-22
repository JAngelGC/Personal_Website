import React from "react";
import classes from "./App.module.css";

import MainHeader from "./components/layout/MainHeader";
import Profile from "./components/layout/Profile";

// Pages
import PortfolioPage from "./components/pages/PortfolioPage";
import ProjectPage from "./components/pages/ProjectPage";

// Router
import { Route, Routes, Navigate } from "react-router";

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
          {/* <Portfolio /> */}
          <Routes>
            <Route path="/" element={<Navigate replace to="/portfolio" />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
