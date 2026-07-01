import "./AdminDashboard.css";
import { useState, useEffect } from "react";
import { getDashboard } from "../../Services/admin.service.js";
import AdminNavbar from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminHero from "../../Admin/AdminDashBoard/AdminHero.jsx";
import DashboardStats from "../../Admin/AdminDashBoard/DashboardStats.jsx";
import SchemeTable from "../../Admin/AdminDashBoard/SchemeTable.jsx";
import DashboardBanner from "../../Admin/AdminDashBoard/DashboardBanner.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter";
import PageLoader from "../../Components/Common/PageLoader.jsx";


export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return <PageLoader text="Loading Dashboard" />;
  }
  return (
    <div className="admin-page">
      <AdminNavbar />

      <div className="admin-container">
        <AdminHero />

        <DashboardStats stats={dashboard?.stats} />
        <SchemeTable schemes={dashboard?.recentSchemes} />

        <DashboardBanner />
      </div>

      <AdminFooter />
    </div>
  );
}
