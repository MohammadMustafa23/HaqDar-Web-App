import { Calendar, ShieldCheck } from "lucide-react";

export default function ProfileHeader({user}) {
  return (
    <div className="hd-profile-header">

      <div className="hd-profile-header-left">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
          className="hd-profile-image"
        />

        <div>
          <h1>{user.userName}</h1>

          <p>
            <Calendar size={15} />
            Member since March 2024
          </p>

          <div className="hd-profile-badge-container">
            <span className="hd-profile-badge">
              <ShieldCheck size={14} />
              Identity Verified
            </span>

            <span className="hd-profile-badge">Farm hd-profile-badgeer</span>
          </div>
        </div>
      </div>

      <button className="hd-profile-edit-btn">
        Edit Profile
      </button>

    </div>
  );
}