import { User, Bookmark } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hd-profile-sidebar-card">
      <h3>Manage Account</h3>

      <button className="hd-profile-menu-btn active">
        <User size={18} />
        Profile
      </button>

      <button className="hd-profile-menu-btn">
        <Bookmark size={18} />
        Saved Schemes
      </button>
    </div>
  );
}