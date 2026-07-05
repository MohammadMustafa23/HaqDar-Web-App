import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isValidUser } from "../Services/auttantication.service.js";
import PageLoader from "../Components/Common/PageLoader.jsx";
import "./ProtectedRoute.css";
import { toast } from "sonner";
export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const isValid = await isValidUser();
        setAuthenticated(isValid);
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong. Please try again.",
        );
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  if (loading) {
    return <PageLoader text="Verifying your account..." />;
  }

  return authenticated ? children : <Navigate to="/login" replace />;
}
