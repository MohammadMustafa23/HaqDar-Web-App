import { User, Menu, X, Sun, Moon} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

import ConfirmationModal from "../../Components/Common/ConfirmationModal.jsx";
import { LoginOutUser } from "../../Services/auttantication.service.js";

export default function ProfileNavBar({ profileData, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    if (location.pathname !== "/user-profile") {
      navigate("/user-profile");
    }
  };

  const logoutUser = async () => {
    try {
      const res = await LoginOutUser();
      toast.success(res.data.message);
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed");
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
              <a onClick={() => navigate("/user-profile")}>Profile</a>
              <a onClick={() => navigate("/saved-schemes")}>Saved Scheme</a>
              <a onClick={() => navigate("/submit-feedBack")}>
                FeedBack and Problem
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="home-nav-menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Desktop Right */}
          <div className="home-nav-right home-nav-profile-fade-in">
            <button
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
          />

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

            <a
              onClick={() => {
                navigate("/home-page");
                setMenuOpen(false);
              }}
            >
              Home
            </a>

            <a
              onClick={() => {
                navigate("/user-profile");
                setMenuOpen(false);
              }}
            >
              Profile
            </a>

            <a
              onClick={() => {
                navigate("/saved-schemes");
                setMenuOpen(false);
              }}
            >
              Saved Scheme
            </a>

            <a
              onClick={() => {
                navigate("/submit-feedBack");
                setMenuOpen(false);
              }}
            >
              FeedBack
            </a>

            <a
              onClick={() => {
                setMenuOpen(false);
                setLogoutModal(true);
              }}
            >
              Logout
            </a>
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
