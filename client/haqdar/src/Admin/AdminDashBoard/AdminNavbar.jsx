import "./AdminDashComp.css";
import { Moon, Sun, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export default function AdminNavbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
            <button className="anb-link anb-active">Dashboard</button>

            <button className="anb-link">Scheme Management</button>

            <button className="anb-link">Feedback Management</button>
          </div>
        </div>

        {/* Right */}

        <div className="anb-right">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="anb-profile">
            <img src="https://i.pravatar.cc/100" alt="admin" />

            <div>
              <h4>Admin User</h4>

              <button className="anb-logout">
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
    </nav>
  );
}
