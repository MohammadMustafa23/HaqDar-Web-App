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
    <header className="admin-navbar">
      {/* Left */}

      <div className="home-nav-logo-section">
        <div className="home-nav-logo-box">H</div>

        <h1 className="home-nav-logo-text">HaqDar</h1>
      </div>

      {/* Right */}

      <div className="navbar-right">
        {/* Switch to User */}

        <button className="switch-btn" onClick={handleSwitch}>
          <ArrowLeftRight size={18} />
          <span>User Login</span>
        </button>

        {/* Theme */}

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Status */}

        <div className="status-badge">
          <Circle size={10} fill="#22c55e" color="#22c55e" />

          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
}
