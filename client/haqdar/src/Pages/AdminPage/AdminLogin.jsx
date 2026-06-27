import "./AdminLogin.css";
import AdminNavbar from "../../Admin/Admin_Login/AdminNavbar";
import AdminLeftPanel from "../../Admin/Admin_Login/AdminLeft";
import AdminLoginForm from "../../Admin/Admin_Login/AdminLoginForm";
import AdminFooter from "../../Admin/Admin_Login/AdminFooter";

export default function AdminLogin() {
  return (
    <div className="admin-page">
      <AdminNavbar />

      <main className="admin-content">
        <AdminLeftPanel />

        <AdminLoginForm />
      </main>

      <AdminFooter />
    </div>
  );
}
