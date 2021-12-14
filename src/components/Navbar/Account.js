import { Link } from "react-router-dom";
import React from "react";
import classes from "../styles/HomePageCSS/account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span class="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">
        <span class="material-icons-outlined" title="Logout">
          {" "}
          logout{" "}
        </span>
      </Link>
    </div>
  );
}
