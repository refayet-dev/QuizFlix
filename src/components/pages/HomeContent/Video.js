import React from "react";
import classes from "../../styles/HomePageCSS/video.module.css";
import img from "../../assets/images/3.jpg";

export default function Video() {
  return (
    <div>
      <a href="quiz.html">
        <div className={classes.video}>
          <img src={img} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={classes.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </div>
  );
}
