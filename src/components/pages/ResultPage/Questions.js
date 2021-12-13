import Answer from "../QuizPages/Answer";
import classes from "../../styles/ResultPageCSS/Questions.module.css";

export default function Questions() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answer />
    </div>
  );
}
