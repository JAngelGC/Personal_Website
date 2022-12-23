import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./MainHeader.module.css";

import Button from "../ui/Button";

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
          <Link to="/portfolio">
            <Button
              text="Portfolio"
              classesProps={`${classes[checkSelected("portfolio")]} ${
                classes["button"]
              }`}
            />
          </Link>

          <Link to="/resume">
            <Button
              text="Resume"
              classesProps={`${classes[checkSelected("resume")]} ${
                classes["button"]
              }`}
            />
          </Link>

          <Link to="/transcript">
            <Button
              text="Transcript"
              classesProps={`${classes[checkSelected("transcript")]} ${
                classes["button"]
              }`}
            />
          </Link>

          <Link to="/about-me">
            <Button
              text="About Me"
              classesProps={`${classes[checkSelected("about-me")]} ${
                classes["button"]
              }`}
            />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
