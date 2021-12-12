import React from "react";
import Video from "./Video";
import classes from "../../styles/videos.module.css";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
