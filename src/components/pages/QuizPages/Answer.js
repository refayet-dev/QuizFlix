import CheckBox from "../AccessPoint/CheckBox";
import classes from "../../styles/QuizPageCSS/Answer.module.css";

export default function Answer() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Please answer" />
      <CheckBox className={classes.answer} text="Please answer" />
      <CheckBox className={classes.answer} text="Please answer" />
      <CheckBox className={classes.answer} text="Please answer" />
      <CheckBox className={classes.answer} text="Please answer" />
    </div>
  );
}
