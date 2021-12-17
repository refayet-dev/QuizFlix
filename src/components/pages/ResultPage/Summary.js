import classes from "../../styles/ResultPageCSS/Summary.module.css";
import img from "../../assets/images/success.png";

export default function Summary({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
