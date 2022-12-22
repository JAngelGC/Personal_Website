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
      <p>{project.paragraph}</p>
    </section>
  );
};

export default Project;
