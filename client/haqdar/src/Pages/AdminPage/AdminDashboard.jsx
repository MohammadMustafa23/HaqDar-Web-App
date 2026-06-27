import "./AdminDashboard.css";

import AdminNavbar from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminHero from "../../Admin/AdminDashBoard/AdminHero.jsx";
import DashboardStats from "../../Admin/AdminDashBoard/DashboardStats.jsx";
import SchemeTable from "../../Admin/AdminDashBoard/SchemeTable.jsx";
import DashboardBanner from "../../Admin/AdminDashBoard/DashboardBanner.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter";

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <AdminNavbar />

      <div className="admin-container">
        <AdminHero />

        <DashboardStats />

        <SchemeTable />

        <DashboardBanner />  
      </div>

      <AdminFooter />
    </div>
  );
}
