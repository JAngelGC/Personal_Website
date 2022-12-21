import classes from "./PortfolioGrid.module.css";
import PortfolioPrevCard from "./PortfolioPrevCard";

const projectsArray: { name: string; img: string; link: string }[] = [
  { name: "Mezcal Website", img: "prev_mezcal.png", link: "mezcal" },
  { name: "Multi-agent system", img: "prev_traffic.png", link: "mezcal" },
  { name: "Rule-based chatbot", img: "prev_chatbot.png", link: "mezcal" },
  { name: "Alerta Can App", img: "prev_dogs.png", link: "mezcal" },
  { name: "Pergolas Website", img: "prev_pergolas.png", link: "mezcal" },
  { name: "Syntax Highlighter", img: "prev_syntax.png", link: "mezcal" },
  { name: "Weather website", img: "prev_weather.png", link: "mezcal" },
  { name: "Pokedex", img: "prev_pokedex.png", link: "mezcal" },
];

const PortfolioGrid = () => {
  return (
    <div className={classes["container-projects"]}>
      {projectsArray.map((project) => {
        return (
          <PortfolioPrevCard
            name={project.name}
            img={project.img}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
