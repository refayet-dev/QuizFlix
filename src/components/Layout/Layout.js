import Nav from "../Navbar/Nav";
import React from "react";
import classes from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
