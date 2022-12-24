import TranscriptSemester from "./TranscriptSemester";
import Button from "../ui/Button";

import classes from "./Transcript.module.css";

const Transcript = () => {
  return (
    <>
      <Button
        text="Download transcript"
        classesProps={classes["button-download"]}
      />

      <h2 className={classes["major"]}>
        B.S. in Computer Science and Information Technology (ICT)
      </h2>
      <p className={classes["school"]}>
        Instituto Tecnológico y de Estudios Superiores de Monterrey
      </p>

      <div className={classes["container-headers"]}>
        <p className={classes["class"]}>Class</p>
        <p className={classes["grade"]}>Grade </p>
        <p className={classes["credits"]}>Credits</p>
      </div>

      <TranscriptSemester
        title="1st Semester (August - December 2020)"
        subjects={[
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Engineering and Science Modeling",
            grade: 99,
            credits: 3,
          },
          {
            name: "Computational Modeling of Movement",
            grade: 100,
            credits: 3,
          },
          {
            name: "Computational Modeling Applying Conservation Law",
            grade: 95,
            credits: 3,
          },
          {
            name: "Mathematical Thinking I",
            grade: 99,
            credits: 2,
          },
          {
            name: "Analysis of the Structure and Properties of Matter",
            grade: 91,
            credits: 1,
          },
          {
            name: "Ecological Processes for Human Development",
            grade: 100,
            credits: 3,
          },
        ]}
      />

      <hr className={classes["bottom-line"]} />

      <TranscriptSemester
        title="2nd Semester (January - June 2021)"
        subjects={[
          {
            name: "Computational Biology Analysis",
            grade: 100,
            credits: 1,
          },
          {
            name: "Physical Experimentation and Statistical Thinking",
            grade: 99,
            credits: 1,
          },
          {
            name: "Computational Modeling of Electrical Systems",
            grade: 99,
            credits: 3,
          },
          {
            name: "Computational Modeling of Electromagnetic Systems",
            grade: 98,
            credits: 3,
          },
          {
            name: "Intermediate Mathematical Modeling",
            grade: 100,
            credits: 2,
          },
          {
            name: "Statistic Analysis",
            grade: 94,
            credits: 1,
          },
          {
            name: "Modeling of Engineering with Computational Mathematics",
            grade: 96,
            credits: 3,
          },
          {
            name: "Object-Oriented Programming",
            grade: 100,
            credits: 1,
          },
          {
            name: "The Myths that Inhabit Us: from Prometheus to Marvel",
            grade: 100,
            credits: 3,
          },
        ]}
      />

      <hr className={classes["bottom-line"]} />

      <TranscriptSemester
        title="3rd Semester (August - December 2021)"
        subjects={[
          {
            name: "Analysis of Differential Equations",
            grade: 100,
            credits: 1,
          },
          {
            name: "Implementation of the Internet of Things",
            grade: 97,
            credits: 6,
          },
          {
            name: "Programming of Data Structures and Fundamental Algorithms",
            grade: 97,
            credits: 3,
          },
          {
            name: "Modeling of Minimum Systems and Computational Architectures",
            grade: 100,
            credits: 1,
          },
          {
            name: "Analysis of Software Requirements",
            grade: 98,
            credits: 1,
          },
          {
            name: "Exploration Topic",
            grade: 100,
            credits: 3,
          },
          {
            name: "Geopolitics and Technological Changes: The Future Today",
            grade: 98,
            credits: 3,
          },
        ]}
      />

      <hr className={classes["bottom-line"]} />

      <TranscriptSemester
        title="4th Semester (February - June 2022)"
        subjects={[
          {
            name: "Software Construction and Decision Making",
            grade: 99,
            credits: 8,
          },
          {
            name: "Device Interconnection",
            grade: 100,
            credits: 4,
          },
          {
            name: "Implementation of Computational Methods",
            grade: 97,
            credits: 3,
          },
          {
            name: "Post-humanism, Ethics, and Technology",
            grade: 98,
            credits: 3,
          },
        ]}
      />

      <hr className={classes["bottom-line"]} />

      <TranscriptSemester
        title="5th Semester (August - December 2022)"
        subjects={[
          {
            name: "Integration of Computer Security in Networks and Software Systems",
            grade: 99,
            credits: 8,
          },
          {
            name: "Modeling of Multi-Agent Systems with Computer Graphics",
            grade: 99,
            credits: 4,
          },
          {
            name: "Analysis and Design of Advanced Algorithms",
            grade: 100,
            credits: 3,
          },
          {
            name: "Argumentation, Debate, and the Art of Public Speaking",
            grade: 100,
            credits: 3,
          },
        ]}
      />

      <hr className={classes["bottom-line"]} />
    </>
  );
};

export default Transcript;
