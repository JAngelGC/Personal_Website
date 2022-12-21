// import { NavLink } from "react-router-dom"
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["header"]}>
      <nav>
        <ul>
          <li>Portfolio</li>
          <li>CV</li>
          <li>Transcript</li>
          <li>About me</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
