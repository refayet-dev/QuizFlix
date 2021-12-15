import CheckBox from "../AccessPoint/CheckBox";
import classes from "../../styles/QuizPageCSS/Answer.module.css";

export default function Answer({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          key={index}
          className={classes.answer}
          text={option.title}
          checked={option.checked}
          value={index}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
