import classes from "./Resume.module.css";

import Button from "../ui/Button";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeBullets from "./ResumeBullets";

const Resume = () => {
  return (
    <section className={classes["container-content"]}>
      <Button
        text="Download resume"
        classesProps={classes["button-download"]}
      ></Button>

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

      <div className={classes["section-experience"]}>
        <h3 className={classes["title-section"]}>Extra Academic Experience</h3>
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

      <div className={classes["section-languages"]}>
        <h3 className={classes["title-section"]}>Languages</h3>
        <ResumeBullets
          bullets={["English (B2) / Cambridge", "Spanish (native language)"]}
        />
        <hr className={classes["bottom-line"]} />
      </div>

      <div className={classes["section-courses"]}>
        <h3 className={classes["title-section"]}>Online Courses</h3>
        <ResumeBullets
          bullets={[
            "Python Data Structures",
            "Data Collection and Processing with Python",
            "Build Responsive Real-World Websites with HTML and CSS",
          ]}
        />
        <hr className={classes["bottom-line"]} />
      </div>
    </section>
  );
};

export default Resume;
