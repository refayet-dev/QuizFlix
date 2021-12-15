import "./styles/App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../Routes/Routes";

import Home from "./pages/HomeContent/Home";
import Layout from "./Layout/Layout";
import LogIn from "./pages/AccessPoint/LogIn";
import Quiz from "./pages/QuizPages/Quiz";
import Result from "./pages/ResultPage/Result";
import SignUp from "./pages/AccessPoint/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/result/:id"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
