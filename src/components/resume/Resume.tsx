import { Link } from "react-router-dom";
import classes from "./Resume.module.css";

import Button from "../ui/Button";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeBullets from "./ResumeBullets";

const Resume = () => {
  return (
    <section className={classes["container-content"]}>
      <Link to="/files/JAngelGonzalez_CV.pdf" target="_blank" download>
        <Button
          text="Download resume"
          classesProps={classes["button-download"]}
        ></Button>
      </Link>

      <div className={classes["section-education"]}>
        <h3 className={classes["title-section"]}>Education</h3>
        <ResumeEducation />
        <hr className={classes["bottom-line"]} />
      </div>

      <div className={classes["section-experience"]}>
        <h3 className={classes["title-section"]}>Experience</h3>
        <ResumeExperience
          img="ellucianLogo.png"
          title="Ellucian"
          // date="January 2023 - May 2023"
          date="Incoming"
          // text="A C++ OOP program that retrieves streaming service data and shows them
          // to the users, allowing them to rate the content."
          // bullets={["First sentence", "Second sentence"]}
        />

        <hr className={classes["bottom-line"]} />
      </div>

      <div className={classes["section-experience"]}>
        <h3 className={classes["title-section"]}>Extra Academic Experience</h3>
        <ResumeExperience
          img="peerLogo.png"
          title="Peer Mentor"
          date="February 2022 - Present"
          bullets={[
            "Member of the Peer Mentor Program, which supports freshmen students to adapt to college life.",
            "I’m in charge of 15 students and I help them in whatever I can, including programming classes.",
          ]}
        />
        <ResumeExperience
          img="tecbytesLogo.png"
          title="TecBytes"
          date="February 2021 - Present"
          bullets={[
            "Group in charge of developing web projects to achieve a significant impact inside and outside the student community.",
            "As a member, recently I was responsible for designing and implementing the distinct pages for the departments in TecBytes.",
          ]}
        />

        <ResumeExperience
          img="werLogo.jpg"
          title="WER México"
          date="February 2021 - Present"
          bullets={[
            "High-school robotics team. In the regional tournament, my team won our pass to the national.",
            "I worked as the leader of my team, reviewing the code and the design of our robot.",
          ]}
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
            "The Complete JavaScript Course 2022: From Zero to Expert!",
            "React - The Complete Guide (incl Hooks, React Router, Redux)",
          ]}
        />
        <hr className={classes["bottom-line"]} />
      </div>
    </section>
  );
};

export default Resume;
