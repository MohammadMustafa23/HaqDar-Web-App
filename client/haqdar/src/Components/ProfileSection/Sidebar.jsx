import { User, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="hd-profile-sidebar-card">
      <h3>Manage Account</h3>

      <button className="hd-profile-menu-btn active">
        <User size={18} />
        Profile
      </button>
      

      <button className="hd-profile-menu-btn" 
       onClick={() => navigate("/saved-schemes")}>
        <Bookmark size={18} />
        Saved Schemes
      </button>
    </div>
  );
}