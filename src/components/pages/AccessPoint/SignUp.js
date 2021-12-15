import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import Illustration from "./Illustration";
import LastNote from "./LastNote";
import TextInput from "./TextInput";
import classes from "../../styles/AccessPointPageCSS/SignUp.module.css";
import signUpImg from "../../assets/images/signup.svg";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password doesn't Match.");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Can't create an Account");
    }
  }
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signUpImg} alt="SignUP" />
        <Form action="#" className={classes.signup} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            required
            placeholder="Enter name"
            icon="person"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CheckBox
            text="I agree to the Terms & Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <Button type="submit" disable={loading}>
            <span>Submit Now</span>
          </Button>
          <LastNote
            text="Already have an account?"
            link="/login"
            ButtnTxt="Login"
          />
        </Form>
      </div>
    </div>
  );
}
