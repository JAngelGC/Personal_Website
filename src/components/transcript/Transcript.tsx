import TranscriptSemester from "./TranscriptSemester";

import classes from "./Transcript.module.css";

const Transcript = () => {
  return (
    <>
      <button className={classes["button"]}>Download resume</button>

      <h2 className={classes["major"]}>
        B.S. in Computer Science and Information Technology (ICT)
      </h2>
      <p className={classes["school"]}>
        Instituto Tecnológico y de Estudios Superiores de Monterrey
      </p>

      <div className={classes["container-headers"]}>
        <p className={classes["class"]}>Class</p>
        <p className={classes["grade"]}>Grade (Percentage)</p>
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
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
        ]}
      />

      <TranscriptSemester
        title="1st Semester (August - December 2020)"
        subjects={[
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
        ]}
      />

      <TranscriptSemester
        title="1st Semester (August - December 2020)"
        subjects={[
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
          {
            name: "Computational Thinking and Programming",
            grade: 97,
            credits: 3,
          },
        ]}
      />
    </>
  );
};

export default Transcript;
