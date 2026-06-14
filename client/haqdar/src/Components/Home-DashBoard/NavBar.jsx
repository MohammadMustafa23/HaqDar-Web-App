import { Bell, User } from "lucide-react";
import "./HomeDashBoard.css";
import { ProfileSkeleton } from "./Effect/CompleteProfileSkeleton";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left side instantly visible */}
          <div className="navbar-left">
            <div className="logo-section">
              <div className="logo-box">H</div>
              <h1 className="logo-text">HaqDar</h1>
            </div>

            <div className="nav-links">
              <a href="#">Schemes</a>
              <a href="#">Eligibility</a>
            </div>
          </div>

          {/* Right side skeleton */}
          <ProfileSkeleton />
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-section">
            <div className="logo-box">H</div>
            <h1 className="logo-text">HaqDar</h1>
          </div>

          <div className="nav-links">
            <a href="#">Schemes</a>
            <a href="#">Eligibility</a>
          </div>
        </div>

        {/* Fade-in Effect */}
        <div className="navbar-right profile-fade-in">
          <button className="notification-btn">
            <Bell size={22} />
            <span className="notification-dot"></span>
          </button>

          <div className="divider"></div>

          <div className="profile-section">
            <div className="profile-info">
              <h3>Arjun Sharma</h3>
              <p>Beneficiary</p>
            </div>

            <div className="profile-icon">
              <User size={22} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}