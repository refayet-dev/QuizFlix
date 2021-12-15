import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/home" />;
}

export function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/home" /> : children;
}
