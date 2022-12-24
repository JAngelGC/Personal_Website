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
          <p className={classes["container-icon"]} onClick={emailToHandler}>
            <div className={classes["icon-social-network"]}>
              <img src="/static/icons/email.svg" alt="" />
            </div>
          </p>

          <a
            href="https://www.linkedin.com/in/j-angel-gonzalez/"
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
          <Span text="Frontend" />
          <Span text="Python" />
          <Span text="C++" />
          <Span text="React Js" />
          <Span text="Node Js" />
          <Span text="MongoDB" />
        </div>
      </section>
    </div>
  );
};

export default Profile;
