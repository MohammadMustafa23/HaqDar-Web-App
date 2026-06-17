import { Bell, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- Missing
  const handleProfileClick = () => {
  if (location.pathname !== "/user-profile") {
    navigate("/user-profile", {
    });
  }
};
  return (
    <>
      <nav className="home-nav-navbar">
        <div className="home-nav-container">
          <div className="home-nav-left">
            <div className="home-nav-logo-section">
              <div className="home-nav-logo-box">H</div>
              <h1 className="home-nav-logo-text">HaqDar</h1>
            </div>

            <div className="home-nav-links">
              <a href="#">Schemes</a>
              <a href="#">Eligibility</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="home-nav-menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Desktop Right Side */}
          <div className="home-nav-right home-nav-profile-fade-in">
            <button className="home-nav-notification-btn">
              <Bell size={22} />
              <span className="home-nav-notification-dot"></span>
            </button>

            <div className="home-nav-divider"></div>

            <div className="home-nav-profile-section">
              <div className="home-nav-profile-info">
                <h3>Temp</h3>
                <p>Beneficiary</p>
              </div>

              <div className="home-nav-profile-icon" onClick={handleProfileClick}>
                <User size={22} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div
            className="home-nav-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="home-nav-mobile-menu">
            <div className="home-nav-mobile-header">
              <h3>Menu</h3>

              <button
                className="home-nav-close-btn"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <a href="#">Schemes</a>
            <a href="#">Eligibility</a>
            <a href="#">Notifications</a>
            <a href="#">Profile</a>
          </div>
        </>
      )}
    </>
  );
}