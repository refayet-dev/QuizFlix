import { Link } from "react-router-dom";
import React from "react";
import classes from "../styles/HomePageCSS/account.module.css";
import { useAuth } from "../../Contexts/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <Link to="/login">
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={logout}
            >
              {" "}
              logout{" "}
            </span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
