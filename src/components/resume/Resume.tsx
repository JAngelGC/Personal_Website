import { Link } from "react-router-dom";
import classes from "./Resume.module.css";

import Button from "../ui/Button";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";
import ResumeExtraExperience from "./ResumeExtraExperience";
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
          img="oracleLogo.jpg"
          title="Software Engineer Intern"
          company="Oracle"
          date="June 2023 - Present"
          text=""
          bullets={[
            "Implemented a Python3 locking module compatible with NFS, currently utilized in 20+ scripts within the team repository. It supports file, process, and thread locking, including both shared and exclusive lock capabilities.",
            "Designed 18+ Pytest tests for the locking module, each varying process/thread count within clusters to evaluate functionality across usage scenarios.",
            "Migrated 15+ Python 3 scripts used for database maintenance, including backups, log file cleaning, and health checks.",
          ]}
        />

        <ResumeExperience
          img="mlhLogo.jpg"
          title="Software Engineer Fellow"
          company="MLH Fellowship"
          date="May 2023 - July 2023"
          text=""
          bullets={[
            "Worked with a diverse team of 10+ international members on developing a resume builder application, integrating a feature to download resumes in PDF format.",
            "Collaborated with a Meta Software Engineer to gather detailed requirements for a speech-to-text application integrated with the OpenAI API.",
            "Laid the groundwork for the speech-to-text application using Next.js for the frontend and Firebase for storing conversation history.",
          ]}
        />

        <ResumeExperience
          img="ellucianLogo.png"
          title="R&D PowerCampus Intern"
          company="Ellucian"
          date="January 2023 - July 2023"
          text=""
          bullets={[
            "Generated seed data from an Oracle database using PL/SQL to help in a process of data migration to a PostgreSQL database.",
            "Created multiple functional tests using Groovy to verify the data insertion was successful.",
            "Handled multiple Docker containers to isolate environments for the Oracle and Postgres databases.",
          ]}
        />

        <ResumeExperience
          img="habaneroLogo.png"
          title="Frontend Developer"
          date="September 2022 - July 2023"
          text=""
          company="Habanero Marketing"
          bullets={[
            "Worked directly with clients to understand their needs and objectives, and to gather requirements for website development projects.",
            "Developed and maintained websites using frameworks such as Next.js to enhance functionality and performance.",
            "Implemented UI/UX best practices to create intuitive, user-friendly interfaces.",
          ]}
        />

        <hr className={classes["bottom-line"]} />
      </div>

      <div className={classes["section-experience"]}>
        <h3 className={classes["title-section"]}>Extra Academic Experience</h3>
        <ResumeExtraExperience
          img="peerLogo.png"
          title="Peer Mentor"
          date="February 2022 - August 2023"
          bullets={[
            "Member of the Peer Mentor Program, which supports freshmen students to adapt to college life.",
            "I’m in charge of 15 students and I help them in whatever I can, including programming classes.",
          ]}
        />

        <ResumeExtraExperience
          img="paeLogo.png"
          title="Programa Asesor Estudiante"
          date="August 2022 - December 2022"
          bullets={[
            "Conducted weekly one-on-one tutoring sessions on various Computer Science topics for freshman students.",
            "Demonstrated strong communication skills and adapted teaching style to individual needs.",
            "Collaborated with other tutors and the department to coordinate schedules and improve program.",
          ]}
        />

        <ResumeExtraExperience
          img="tecbytesLogo.png"
          title="TecBytes"
          date="February 2021 - December 2022"
          bullets={[
            "Group in charge of developing web projects to achieve a significant impact inside and outside the student community.",
            "As a member, recently I was responsible for designing and implementing the distinct pages for the departments in TecBytes.",
          ]}
        />

        <ResumeExtraExperience
          img="werLogo.jpg"
          title="WER México"
          date="February 2021 - May 2022"
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
