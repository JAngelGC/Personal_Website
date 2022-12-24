import classes from "./ResumeEducation.module.css";

const ResumeEducation = () => {
  return (
    <div className={classes["container-education"]}>
      <img
        className={classes["img-square"]}
        src="/static/images/resume/logoTec.png"
        alt=""
      />

      <div className={classes["education-text"]}>
        <h3 className={classes["title-experience"]}>
          B.S. in Computer Science and Technology
        </h3>
        <p className={classes["subtitle-experience"]}>
          Tecnológico de Monterrey, campus Puebla
        </p>
        <p className={classes["text-experience"]}>Accumulated GPA: 98.3/100</p>
        <p className={classes["text-experience"]}>Aug 2020 - Jun 2024</p>
      </div>
      {/* <hr className={classes["bottom-line"]} /> */}
    </div>
  );
};

export default ResumeEducation;
