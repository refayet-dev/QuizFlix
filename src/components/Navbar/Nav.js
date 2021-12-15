import Account from "./Account";
import { Link } from "react-router-dom";
import React from "react";
import classes from "../styles/nav.module.css";
import logo from "../assets/images/logo-bg.png";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/home">
            <div className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </div>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
