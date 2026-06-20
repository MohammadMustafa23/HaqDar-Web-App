import { Calendar, ShieldCheck, User } from "lucide-react";

export default function ProfileHeader({ user, profile }) {
  const memberSince = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Complete Profile";
  return (
    <div className="hd-profile-header">
      <div className="hd-profile-header-left">
        <div className="hd-profile-image">
          <User size={28} />
        </div>

        <div>
          <h1>{user.userName}</h1>

          <p>
            <Calendar size={15} />
            Member since {memberSince}
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

      <button className="hd-profile-edit-btn">Edit Profile</button>
    </div>
  );
}
