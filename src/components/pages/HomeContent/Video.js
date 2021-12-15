import React from "react";
import classes from "../../styles/HomePageCSS/video.module.css";
import img from "../../assets/images/3.jpg";

export default function Video({ id, title, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq}Questions</p>
        <p>Total number :{noq * 5}</p>
      </div>
    </div>
  );
}
