import { Link } from "react-router-dom";

import classes from "./PortfolioPrevCard.module.css";

const PortfolioPrevCard: React.FC<{
  name: string;
  img: string;
  id: number;
}> = (props) => {
  return (
    <Link
      to={`/portfolio/${props.id}`}
      className={classes["container-project-card"]}
    >
      <img src={`/static/images/prevs/${props.img}`} alt="" />
      <p>{props.name}</p>
    </Link>
  );
};

export default PortfolioPrevCard;
