import classes from "./PortfolioPrevCard.module.css";

const PortfolioPrevCard: React.FC<{
  name: string;
  img: string;
  link: string;
}> = (props) => {
  console.log(props);
  return (
    <div className={classes["container-project-card"]}>
      <img src={`/static/images/prevs/${props.img}`} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default PortfolioPrevCard;
