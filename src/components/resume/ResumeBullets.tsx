import classes from "./ResumeBullets.module.css";

const ResumeBullets: React.FC<{ bullets: string[] }> = (props) => {
  return (
    <ul className={classes["container-bullets"]}>
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
  );
};

export default ResumeBullets;
