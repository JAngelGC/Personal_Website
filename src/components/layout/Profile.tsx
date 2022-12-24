import Span from "../ui/Span";
import classes from "./Profile.module.css";

const Profile: React.FC<{ classesProps: string }> = (props) => {
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
          <div className={classes["container-icon"]}>
            <img
              className={classes["icon-social-network"]}
              src="/static/icons/email.svg"
              alt=""
            />
          </div>
          <div className={classes["container-icon"]}>
            <img
              className={classes["icon-social-network"]}
              src="/static/icons/linkedin.svg"
              alt=""
            />
          </div>
          <div className={classes["container-icon"]}>
            <img
              className={classes["icon-social-network"]}
              src="/static/icons/github.svg"
              alt=""
            />
          </div>
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
