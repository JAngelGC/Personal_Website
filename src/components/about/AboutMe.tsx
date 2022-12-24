import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes["section-about-me"]}>
      <p className={classes["text"]}>
        I am a 5th semester student of Engineering in Computer Science at
        Tecnológico de Monterrey in Puebla, enthusiastic about how technology
        can improve all areas in our world.
      </p>
    </section>
  );
};

export default AboutMe;
