import { User, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ConfirmationModal from "../Common/ConfirmationModal.jsx";
import { LoginOutUser } from "../../Services/auttantication.service.js";
import { toast } from "sonner";
export default function MatchedScheme_NavBar({ profileData, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // <-- Missing
  const handleProfileClick = () => {
    if (location.pathname !== "/user-profile") {
      navigate("/user-profile", {});
    }
  };
  const [logoutModal, setLogoutModal] = useState(false);
  const logoutUser = async () => {
    try {
      const res = await LoginOutUser();
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again.",
      );
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
              <a onClick={() => () => navigate("/home-page")}>Home</a>
              <a onClick={() => () => navigate("/home-page")}>How its Work</a>
              <a onClick={() => () => navigate("/home-page")}>FAQ</a>
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
            <button
              className="theme-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <div className="home-nav-divider"></div>

            <div className="home-nav-profile-section">
              <div className="home-nav-profile-info">
                <h3>{profileData?.userName}</h3>
                <p>Beneficiary</p>
              </div>

              <div
                className="home-nav-profile-icon"
                onClick={handleProfileClick}
              >
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
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <h3>Menu</h3>
              <button
                className="home-nav-close-btn"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <a onClick={() => () => navigate("/home-page")}>Home</a>
            <a href="/user-profile">Profile</a>
            <a href="/saved-schemes">Saved Scheme</a>
            <a onClick={() => setLogoutModal(true)}>LogOut</a>
          </div>
        </>
      )}

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
    </>
  );
}
