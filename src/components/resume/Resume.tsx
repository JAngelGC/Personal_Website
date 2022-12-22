import classes from "./Resume.module.css";

import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

const Resume = () => {
  return (
    <section className={classes["container-content"]}>
      <button className={classes["button"]}>Download resume</button>

      <div className={classes["section-education"]}>
        <h3 className={classes["title-section"]}>Education</h3>
        <ResumeEducation />
        <hr className={classes["bottom-line"]} />
      </div>

      <div className={classes["section-experience"]}>
        <h3 className={classes["title-section"]}>Experience</h3>
        <ResumeExperience
          img="logoTec.png"
          title="Ellucian"
          date="January 2022 - Now"
          text="A C++ OOP program that retrieves streaming service data and shows them
          to the users, allowing them to rate the content."
          bullets={["First sentence", "Second sentence"]}
        />
        <ResumeExperience
          img="logoTec.png"
          title="Ellucian"
          date="January 2022 - Now"
          text="A C++ OOP program that retrieves streaming service data and shows them
          to the users, allowing them to rate the content."
          bullets={["First sentence", "Second sentence"]}
        />
        <hr className={classes["bottom-line"]} />
      </div>
    </section>
  );
};

export default Resume;
