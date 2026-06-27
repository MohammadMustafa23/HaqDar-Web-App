import { useEffect, useState } from "react";
import { Moon, Sun, Circle } from "lucide-react";

import "./AdminNavbar.css";

export default function Navbar() {
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

  return (
    <header className="admin-navbar">
      {/* LEFT */}

      <div className="home-nav-logo-section">
        <div className="home-nav-logo-box">H</div>
        <h1 className="home-nav-logo-text">HaqDar</h1>
      </div>

      {/* RIGHT */}

      <div className="navbar-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div className="status-badge">
          <Circle size={10} fill="#22c55e" color="#22c55e" />

          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
}
