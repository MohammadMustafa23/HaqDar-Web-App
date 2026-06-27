import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function NavBar({ theme, setTheme, scrollToSection, RefObj }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="home-nav-head">
        <div className="logo-section">
          <div className="logo-box">H</div>
          <h1 className="logo-text">HaqDar</h1>
        </div>

        <div className="nav-links">
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </a>
          <a onClick={() => scrollToSection(RefObj.schemesRef)}>Schemes</a>
          <a onClick={() => scrollToSection(RefObj.howWorkRef)}>How its Work</a>
          <a onClick={() => scrollToSection(RefObj.faqRef)}>FAQ</a>
        </div>

      
          <div className="theme" >
            <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          </div>
          <button className="sign-up-btn" onClick={() => navigate("/login")}>
            Check Eligibility
          </button>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <a>Home</a>
          <a>Schemes</a>
          <a>How its Work</a>
          <a>FAQ</a>

          <button className="mobile-signup" onClick={() => navigate("/login")}>
            Check Eligibility
          </button>
        </div>
      )}
    </>
  );
}
