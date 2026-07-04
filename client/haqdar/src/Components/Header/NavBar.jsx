import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function NavBar({ theme, setTheme, scrollToSection, RefObj }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navItems = [
    {
      label: "Home",
      action: () => scrollToSection(RefObj.homeRef),
    },
    {
      label: "Schemes",
      action: () => scrollToSection(RefObj.schemesRef),
    },
    {
      label: "How It Works",
      action: () => scrollToSection(RefObj.howWorkRef),
    },
    {
      label: "FAQ",
      action: () => scrollToSection(RefObj.faqRef),
    },
  ];

  const handleNavClick = (action) => {
    action();
    closeMenu();
  };

  return (
    <>
      <header className="home-nav-head">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo-box">H</div>
          <h1 className="logo-text">HaqDar</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-link"
              onClick={() => item.action()}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="sign-up-btn" onClick={() => navigate("/login")}>
            Check Eligibility
          </button>

          <button
            className="menu-btn"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            className="mobile-link"
            onClick={() => handleNavClick(item.action)}
          >
            {item.label}
          </button>
        ))}

        <button
          className="mobile-signup"
          onClick={() => {
            navigate("/login");
            closeMenu();
          }}
        >
          Check Eligibility
        </button>
      </div>
    </>
  );
}
