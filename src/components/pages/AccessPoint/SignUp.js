import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import Illustration from "./Illustration";
import LastNote from "./LastNote";
import TextInput from "./TextInput";
import classes from "../../styles/AccessPointPageCSS/SignUp.module.css";
import signUpImg from "../../assets/images/signup.svg";

export default function SignUp() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signUpImg} alt="SignUP" />
        <Form action="#" className={classes.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms & Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <LastNote
            text="Already have an account?"
            link="login.html"
            ButtnTxt="Login"
          />
        </Form>
      </div>
    </div>
  );
}
