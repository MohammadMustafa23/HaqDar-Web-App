import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Circle, Shield } from "lucide-react";

import "./Nav.css";

export default function Navbar() {
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

  return (
    <header className="home-navbar">
      {/* Logo */}
      <div className="home-navbar-logo">
        <div className="home-navbar-logo-box">H</div>
        <h1 className="home-navbar-logo-text">HaqDar</h1>
      </div>

      {/* Right */}
      <div className="home-navbar-actions">
        <button
          className="home-navbar-admin-btn"
          onClick={() => navigate("/admin-login")}
        >
          <Shield size={18} />
          <span>Admin Login</span>
        </button>

        <button
          className="home-navbar-theme-btn"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div className="home-navbar-status">
          <Circle size={10} fill="#22c55e" color="#22c55e" />
          <span>Unlock Digital Power</span>
        </div>
      </div>
    </header>
  );
}
