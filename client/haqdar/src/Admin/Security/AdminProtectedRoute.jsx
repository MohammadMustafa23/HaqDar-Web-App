import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyAdmin } from "../../Services/admin.service.js";
import PageLoader from "../../Components/Common/PageLoader.jsx";
import { toast } from "sonner";

export default function AdminProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const data = await verifyAdmin();
        setIsAdmin(data);
      } catch (error) {
        setIsAdmin(false);
        // Optional: Only show for unexpected server/network errors
        if (error?.response?.status !== 401) {
          toast.error(
            error?.response?.data?.message ||
              error?.message ||
              "Unable to verify admin access.",
          );
        }
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <PageLoader text="Verifying Admin..." />; // Replace with your Loader component
  }

  return isAdmin ? children : <Navigate to="/admin-login" replace />;
}
