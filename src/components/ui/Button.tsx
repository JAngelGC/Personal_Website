import classes from "./Button.module.css";

const Button: React.FC<{ text: string; classesProps: string }> = (props) => {
  return (
    <button className={`${classes["button"]} ${props.classesProps}`}>
      {props.text}
    </button>
  );
};

export default Button;
