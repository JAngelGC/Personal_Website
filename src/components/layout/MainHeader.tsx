import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const urlPath = useLocation();
  console.log(urlPath);
  const [selectedPage, setSelectedPage] = useState(urlPath.pathname);

  const checkSelected = (page: string) => {
    if (selectedPage.includes(page)) {
      return "link-active";
    } else {
      return "";
    }
  };

  useEffect(() => {
    setSelectedPage(urlPath.pathname);
  }, [urlPath]);

  return (
    <header className={classes["header"]}>
      <nav>
        <ul>
          <li className={`${classes[checkSelected("portfolio")]}`}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={`${classes[checkSelected("resume")]}`}>
            <Link to="/resume">Resume</Link>
          </li>
          <li className={`${classes[checkSelected("transcript")]}`}>
            <Link to="/transcript">Transcript</Link>
          </li>
          <li className={`${classes[checkSelected("about-me")]}`}>
            <Link to="/about-me">About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
