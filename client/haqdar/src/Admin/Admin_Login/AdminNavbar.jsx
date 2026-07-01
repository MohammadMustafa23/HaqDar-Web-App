import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Circle, ArrowLeftRight } from "lucide-react";

import "./AdminNavbar.css";

export default function AdminNavbar() {
  const navigate = useNavigate();

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

  const handleSwitch = () => {
    navigate("/login"); // User Login Page
  };

  return (
    <header className="auth-admin-navbar">
      {/* Logo */}
      <div className="auth-admin-logo">
        <div className="auth-admin-logo-box">H</div>
        <h1 className="auth-admin-logo-text">HaqDar</h1>
      </div>

      {/* Right */}
      <div className="auth-admin-actions">
        {/* Switch */}

        <button className="auth-admin-switch-btn" onClick={handleSwitch}>
          <ArrowLeftRight size={18} />
          <span>User Login</span>
        </button>

        {/* Theme */}

        <button className="auth-admin-theme-btn" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Status */}

        <div className="auth-admin-status">
          <Circle size={10} fill="#22c55e" color="#22c55e" />
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
}
