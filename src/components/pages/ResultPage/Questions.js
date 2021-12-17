import Answer from "../QuizPages/Answer";
import classes from "../../styles/ResultPageCSS/Questions.module.css";

export default function Questions({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answer options={answer.options} input={false} />
    </div>
  ));
}
