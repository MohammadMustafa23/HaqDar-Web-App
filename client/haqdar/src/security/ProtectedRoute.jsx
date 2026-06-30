import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isValidUser } from "../Services/auttantication.service.js";
import PageLoader from "../Components/Common/PageLoader.jsx";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const isValid = await isValidUser();
        setAuthenticated(isValid);
      } catch (error) {
        console.error(error);
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

    if (loading) {
    return (
      <PageLoader text="Verifying your account..." />
    );
  }

  return authenticated ? children : <Navigate to="/login" replace />;
}