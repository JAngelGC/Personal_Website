import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes["section-about-me"]}>
      <p className={classes["text"]}>
        I am a 6th semester student of Engineering in Computer Science at
        Tecnológico de Monterrey in Puebla, enthusiastic about how technology
        can improve all areas in our world.
      </p>

      <p className={classes["text"]}>
        I have worked with many programming languages, such as Python to create
        an API using FastAPI or Flask, C++ to master data structures, PHP to
        connect with SQL databases, or Elixir to create concurrent applications.
        Currently, one of my strengths is frontend development with React.js.
      </p>

      <p className={classes["text"]}>
        Finally, as I am in college, I am a constant team player with different
        teams throughout the semester, where I demonstrate my skills to
        communicate my ideas and the ability to solve any issue that presents.
      </p>
    </section>
  );
};

export default AboutMe;
