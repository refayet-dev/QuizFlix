import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import LastNote from "./LastNote";
import LoginImg from "../../assets/images/login.svg";
import TextInput from "./TextInput";
import classes from "../../styles/AccessPointPageCSS/Login.module.css";

export default function LogIn() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImg} alt="Login" />
        <Form action="#" className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <LastNote
            text="Don't have an account? "
            link="/signup"
            ButtnTxt="SignUp"
          />
        </Form>
      </div>
    </div>
  );
}
