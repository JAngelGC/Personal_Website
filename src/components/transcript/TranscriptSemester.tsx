import classes from "./TranscriptSemester.module.css";

type subjectObj = {
  name: string;
  grade: number;
  credits: number;
};

const TranscriptSemester: React.FC<{
  title: string;
  subjects: subjectObj[];
}> = (props) => {
  return (
    <table className={classes["table-semester"]}>
      <caption className={classes["table-title"]}>{props.title}</caption> 
        <tbody>
        {props.subjects.map((subject) => {
          return (
            <tr key={subject.name}>
              <td className={classes["table-subject"]}>{subject.name}</td>
              <td className={classes["table-grade"]}>{subject.grade}</td>
              <td className={classes["table-credits"]}>{subject.credits}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TranscriptSemester;
