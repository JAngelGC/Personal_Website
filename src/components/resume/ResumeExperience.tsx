import classes from "./ResumeExperience.module.css";

const ResumeExperience: React.FC<{
  img: string;
  title: string;
  date: string;
  text: string;
  bullets: string[];
}> = (props) => {
  return (
    <div className={classes["container-experience"]}>
      <img
        className={classes["img-square"]}
        src={`/static/images/resume/${props.img}`}
        alt=""
      />
      <div className={classes["box-titles"]}>
        <h3 className={classes["title-experience"]}>{props.title}</h3>
        <p className={classes["subtitle-experience"]}>{props.date}</p>
      </div>
      <div className={classes["box-text"]}>
        <p className={classes["text-experience"]}>{props.text}</p>
        <ul>
          {props.bullets.map((bullet) => {
            return (
              <li
                className={`${classes["text-experience"]} ${classes["text-experience-bullet"]}`}
              >
                {bullet}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResumeExperience;
