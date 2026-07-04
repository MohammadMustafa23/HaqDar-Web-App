import { useEffect, useState } from "react";
import { User, Bookmark, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div className="hd-profile-sidebar-card">
      <h3>Manage Account</h3>

      <button className="hd-profile-menu-btn active">
        <User size={18} />
        Profile
      </button>

      <button
        className="hd-profile-menu-btn"
        onClick={() => navigate("/saved-schemes")}
      >
        <Bookmark size={18} />
        Saved Schemes
      </button>

      <button
        className="hd-profile-menu-btn"
        onClick={() => navigate("/submit-feedBack")}
      >
        <ArrowRight size={18} />
        Give FeedBack
      </button>
    </div>
  );
}
