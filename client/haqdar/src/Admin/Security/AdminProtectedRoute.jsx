import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verifyAdmin } from "../../Services/admin.service.js";
import PageLoader from "../../Components/Common/PageLoader.jsx";
export default function AdminProtectedRoute({ children }) {
  console.log("On Protected PAge ");

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const data = await verifyAdmin();
        setIsAdmin(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, []);

  if (loading) {
    return <PageLoader text="Verifying Admin..." />; // Replace with your Loader component
  }

  return isAdmin ? children : <Navigate to='/admin-login' replace />
}
