import "./styles/App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../Contexts/AuthContext";
import Home from "./pages/HomeContent/Home";
import Layout from "./Layout/Layout";
import LogIn from "./pages/AccessPoint/LogIn";
import Quiz from "./pages/QuizPages/Quiz";
import Result from "./pages/ResultPage/Result";
import SignUp from "./pages/AccessPoint/SignUp";

function App() {
  return (
    <Layout>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </AuthProvider>
    </Layout>
  );
}

export default App;
