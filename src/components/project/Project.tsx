import { useParams } from "react-router-dom";

import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio-context";

import classes from "./Project.module.css";

const Project = () => {
  const portfolioCtx = useContext(PortfolioContext);

  // console.log("PORTFOLIO ", portfolioCtx);
  const params = useParams<{ projectId: string }>();
  let projectId: string = params.projectId!;
  projectId = projectId.length > 0 ? projectId : "0";

  let projectIdNum: number = +projectId;

  const project = portfolioCtx[projectIdNum];

  console.log("--------------------", projectId);

  return (
    <section className={classes["container-project"]}>
      <h1 className="title-section">{project.title}</h1>
      <div className={classes["container-subtitles"]}>
        {project.subtitles.map((subtitle) => {
          return <p className={classes["subtitle"]}>{subtitle}</p>;
        })}
      </div>

      <p className={classes["paragraph"]}>{project.paragraph}</p>

      <ul className={classes["container-bullets"]}>
        {project.bulletPoints.map((bullet) => {
          return <li>{bullet}</li>;
        })}
      </ul>

      <div className={classes["container-imgs"]}>
        {["mezcal_1.png", "mezcal_2.png", "mezcal_3.png"].map((img) => {
          return <img src={`/static/images/projects/${img}`} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Project;
