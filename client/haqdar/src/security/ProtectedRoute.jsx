import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isValidUser } from "../Services/auttantication.service.js";
import './ProtectedRoute.css'
export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      const isValid = await isValidUser();

      setAuthenticated(isValid);
      setLoading(false);
    };

    verifyUser();
  }, []);

  if (loading) {
    return (
      <div className="auth-loading">
        <div className="auth-spinner"></div>
        <p>Checking Authentication...</p>
      </div>
    );
  }

  return authenticated ? children : <Navigate to="/login" replace />;
}
