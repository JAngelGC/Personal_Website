import { useParams } from "react-router-dom";

import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio-context";

import classes from "./Project.module.css";
import Span from "../ui/Span";

const Project = () => {
  const portfolioCtx = useContext(PortfolioContext);

  // console.log("PORTFOLIO ", portfolioCtx);
  const params = useParams<{ projectId: string }>();
  let projectId: string = params.projectId!;

  let projectIdNum: number = +projectId;

  const project = portfolioCtx[projectIdNum];

  console.log("--------------------", project);

  return (
    <section className={classes["container-project"]}>
      <h1 className="title-section">{project.title}</h1>
      <p className={classes["date"]}>{project.date}</p>
      <div className={classes["container-subtitles"]}>
        {project.subtitles.map((subtitle) => {
          return <Span classesProps={classes["subtitle"]} text={subtitle} />;
        })}
      </div>

      <p className={classes["paragraph"]}>{project.paragraph}</p>

      <ul className={classes["container-bullets"]}>
        {project.bulletPoints.map((bullet) => {
          return <li>{bullet}</li>;
        })}
      </ul>

      <div className={classes["container-links"]}>
        {Object.entries(project.links).map(([key, value]) => {
          return <Span classesProps={classes["link"]} text={value} />;
          // if (key === "github")
          //   return <p className={classes["link-github"]}>{value}</p>;

          // if (key === "youtube")
          //   return <p className={classes["link-youtube"]}>{value}</p>;

          // if (key === "page")
          //   return <p className={classes["link-page"]}>{value}</p>;
          // else return <p></p>;
        })}
      </div>

      <div className={classes["container-imgs"]}>
        {["mezcal_1.png", "mezcal_2.png", "mezcal_3.png"].map((img) => {
          return <img src={`/static/images/projects/${img}`} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Project;
