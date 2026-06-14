import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
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
          <a>Home</a>
          <a>Schemes</a>
          <a>How its Work</a>
          <a>FAQ</a>
        </div>

        <button
          className="sign-up-btn"
          onClick={() => navigate("/login")}
        >
          Check Eligibility
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <a>Home</a>
          <a>Schemes</a>
          <a>How its Work</a>
          <a>FAQ</a>

          <button
            className="mobile-signup"
            onClick={() => navigate("/login")}
          >
            Check Eligibility
          </button>
        </div>
      )}
    </>
  );
}