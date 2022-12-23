import classes from "./Span.module.css";

const Span: React.FC<{ text: string; classesProps?: string }> = (props) => {
  return (
    <span className={`${classes["span"]} ${props.classesProps}`}>
      {props.text}
    </span>
  );
};

export default Span;
