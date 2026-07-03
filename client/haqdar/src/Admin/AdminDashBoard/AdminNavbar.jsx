import "./AdminDashComp.css";
import { Moon, Sun, LogOut, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { logoutUser as Logout } from "../../Services/admin.service.js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../Components/Common/ConfirmationModal.jsx";
export default function AdminNavbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);
  const logoutUser = async () => {
    try {
      const res = await Logout();
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const [anbOpen, setAnbOpen] = useState(false);
  return (
    <nav className="anb-navbar">
      <div className="anb-container">
        {/* Left */}

        <div className="anb-left">
          <div className="home-nav-logo-section">
            <div className="home-nav-logo-box">H</div>
            <h1 className="home-nav-logo-text">HaqDar</h1>
          </div>
          <div className={`anb-links ${anbOpen ? "anb-show" : ""}`}>
            <button
              className={`anb-link ${
                location.pathname === "/admin-dashboard" ? "anb-active" : ""
              }`}
              onClick={() => navigate("/admin-dashboard", { replace: true })}
            >
              Dashboard
            </button>

            <button
              className={`anb-link ${
                location.pathname === "/admin-scheme" ? "anb-active" : ""
              }`}
              onClick={() => navigate("/admin-scheme", { replace: true })}
            >
              Scheme Management
            </button>

            <button
              className={`anb-link ${
                location.pathname === "/admin-feedback" ? "anb-active" : ""
              }`}
              onClick={() => navigate("/admin-feedback", { replace: true })}
            >
              Feedback Management
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="anb-right">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="anb-profile">
            <div style={{ paddingLeft: "20px", paddingRight: "10px" }}>
              <User size={30} />
            </div>

            <div>
              <h4>Admin</h4>

              <button
                className="anb-logout"
                onClick={() => setLogoutModal(true)}
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          </div>

          <button className="anb-menu-btn" onClick={() => setAnbOpen(!anbOpen)}>
            {anbOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <ConfirmationModal
        open={logoutModal}
        type="warning"
        title="Logout"
        message="Are you sure you want to logout from your account?"
        confirmText="Logout"
        cancelText="Cancel"
        onCancel={() => setLogoutModal(false)}
        onConfirm={async () => {
          setLogoutModal(false);
          await logoutUser();
        }}
      />
    </nav>
  );
}
