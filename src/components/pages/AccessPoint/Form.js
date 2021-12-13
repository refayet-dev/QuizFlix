import classes from "../../styles/AccessPointPageCSS/Form.module.css";

export default function Form({ children, className, action, ...rest }) {
  return (
    <div>
      <form
        className={`${className} ${classes.form}`}
        action={action}
        {...rest}
      >
        {children}
      </form>
    </div>
  );
}
