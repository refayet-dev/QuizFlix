import classes from "../../styles/AccessPointPageCSS/Button.module.css";

export default function Button({ className, children }) {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}
