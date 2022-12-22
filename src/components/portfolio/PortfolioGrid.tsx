import classes from "./PortfolioGrid.module.css";
import PortfolioPrevCard from "./PortfolioPrevCard";

const projectsArray: { id: number; name: string; img: string; link: string }[] =
  [
    { id: 0, name: "Mezcal Website", img: "prev_mezcal.png", link: "mezcal" },
    {
      id: 1,
      name: "Multi-agent system",
      img: "prev_traffic.png",
      link: "mezcal",
    },
    {
      id: 2,
      name: "Rule-based chatbot",
      img: "prev_chatbot.png",
      link: "mezcal",
    },
    { id: 3, name: "Alerta Can App", img: "prev_dogs.png", link: "mezcal" },
    {
      id: 4,
      name: "Pergolas Website",
      img: "prev_pergolas.png",
      link: "mezcal",
    },
    {
      id: 5,
      name: "Syntax Highlighter",
      img: "prev_syntax.png",
      link: "mezcal",
    },
    { id: 6, name: "Weather website", img: "prev_weather.png", link: "mezcal" },
    { id: 7, name: "Pokedex", img: "prev_pokedex.png", link: "mezcal" },
  ];

const PortfolioGrid = () => {
  return (
    <div className={classes["container-projects"]}>
      {projectsArray.map((project) => {
        return (
          <PortfolioPrevCard
            name={project.name}
            img={project.img}
            id={project.id}
          />
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
