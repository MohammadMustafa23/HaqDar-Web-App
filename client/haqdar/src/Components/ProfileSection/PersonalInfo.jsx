import { Pencil } from "lucide-react";

export default function PersonalInfo({user}) {
  return (
    <div className="hd-profile-card">

      <div className="hd-profile-card-header">
        <h3>Personal Information</h3>
        <Pencil size={16} />
      </div>

      <div className="hd-profile-card-body">

        <label>Full Name</label>
        <input value={user.userName} readOnly />

        <label>Email Address</label>
        <input value={user.email} readOnly />

        <label>Password</label>

        <div className="hd-profile-password-box">
          <input value="••••••••" readOnly />
          <span>Change</span>
        </div>

        <small>Last updated 3 months ago</small>

      </div>

    </div>
  );
}