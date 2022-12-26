import classes from "./PortfolioGrid.module.css";
import PortfolioPrevCard from "./PortfolioPrevCard";

import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio-context";

const PortfolioGrid = () => {
  const portfolioCtx = useContext(PortfolioContext);
  console.log(portfolioCtx);

  return (
    <div className={classes["container-projects"]}>
      {portfolioCtx.map((project) => {
        return (
          <PortfolioPrevCard
            name={project.title}
            img={project.imgs[0]}
            id={project.id}
            key={project.id}
          />
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
