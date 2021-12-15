import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import LastNote from "./LastNote";
import LoginImg from "../../assets/images/login.svg";
import TextInput from "./TextInput";
import classes from "../../styles/AccessPointPageCSS/Login.module.css";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Can't Login to that Account.Recheck you Email/Password");
    }
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImg} alt="Login" />
        <Form action="#" className={classes.login} onSubmit={handleSubmit}>
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
          <Button type="submit" disable={loading}>
            <span>Submit Now</span>
          </Button>
          {error && <p className="error">{error}</p>}
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
