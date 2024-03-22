import Span from "../ui/Span";
import classes from "./Profile.module.css";

const Profile: React.FC<{ classesProps: string }> = (props) => {
  const emailToHandler: () => void = () => {
    window.open(
      "mailto:ja_gonzalez42@hotmail.com?subject=Subject&body=Body%20goes%20here"
    );
    return;
  };

  return (
    <div
      className={`${classes["container-profile-ext"]} ${props.classesProps}`}
    >
      <section className={classes["container-profile"]}>
        <div className={classes["container-persona-info"]}>
          <img src="/static/images/me.png" alt="" />
          <h1>José Ángel González Carrera</h1>
          <h2>Computer Science Student</h2>
        </div>

        <div className={classes["container-social-networks"]}>
          <div className={classes["container-icon"]} onClick={emailToHandler}>
            <div className={classes["icon-social-network"]}>
              <img src="/static/icons/email.svg" alt="" />
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/angel-gc/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["container-icon"]}
          >
            <div className={classes["icon-social-network"]}>
              <img src="/static/icons/linkedin.svg" alt="" />
            </div>
          </a>

          <a
            href="https://github.com/JAngelGC"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["container-icon"]}
          >
            <div className={classes["icon-social-network"]}>
              <img src="/static/icons/github.svg" alt="" />
            </div>
          </a>
        </div>

        <div className={classes["container-skills"]}>
          <Span text="Python 3" />
          <Span text="Javascript" />
          <Span text="C++" />
          <Span text="SQL" />
          <Span text="Typescript" />
          <hr className={classes["separator"]} />
          <Span text="Pytest" />
          <Span text="React.js" />
          <Span text="Node.js" />
          <Span text="Next.js" />
          <Span text="Git" />
          <Span text="Github" />
          <Span text="MongoDB" />
        </div>
      </section>
    </div>
  );
};

export default Profile;
