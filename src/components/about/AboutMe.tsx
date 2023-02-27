import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes["section-about-me"]}>
      <p className={classes["text"]}>
        As a Computer Science Student at Tecnológico de Monterrey, I am
        extremely passionate about technology and its ability to transform the
        world around us.
      </p>

      <p className={classes["text"]}>
        My curiosity and enthusiasm for technology have led me to explore
        various areas within the field. I have worked on projects involving web
        development, data analytics, and mobile app development, among others.
        Through these experiences, I have gained a solid understanding of the
        software development process and the importance of collaboration and
        communication in achieving successful outcomes.
      </p>

      <p className={classes["text"]}>
        I am always eager to learn more and to take on new challenges, and I
        look forward to connecting with others who share my passion for
        technology.
      </p>
    </section>
  );
};

export default AboutMe;
