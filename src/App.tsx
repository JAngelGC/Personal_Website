import React from "react";
import classes from "./App.module.css";

import MainHeader from "./components/layout/MainHeader";
import Profile from "./components/layout/Profile";

// Pages
import PortfolioPage from "./components/pages/PortfolioPage";
import ProjectPage from "./components/pages/ProjectPage";
import ResumePage from "./components/pages/ResumePage";
import TranscriptPage from "./components/pages/TranscriptPage";
import AboutMePage from "./components/pages/AboutMePage";

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
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/transcript" element={<TranscriptPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
