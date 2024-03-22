import classes from "./ResumeExperience.module.css";

const ResumeExperience: React.FC<{
  img: string;
  title: string;
  date: string;
  company: string;
  text?: string;
  bullets?: string[];
}> = (props) => {
  return (
    <div className={classes["container-experience"]}>
      <div className={classes["box-img"]}>
        <img
          className={classes["img-square"]}
          src={`/static/images/resume/${props.img}`}
          alt=""
        />
      </div>
      <div className={classes["box-titles"]}>
        <h3 className={classes["title-experience"]}>{props.title}</h3>
        <p className={classes["subtitle-company"]}>{props.company}</p>
        <p className={classes["subtitle-date"]}>{props.date}</p>
      </div>
      <div className={classes["box-text"]}>
        <p className={classes["text-experience"]}>{props.text}</p>
        <ul>
          {props.bullets &&
            props.bullets.map((bullet) => {
              return (
                <li
                  key={bullet} className={`${classes["text-experience"]} ${classes["text-experience-bullet"]}`}
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
