import { CheckCircle, BadgeCheck } from "lucide-react";
import "./HomeDashBoard.css";

export default function AfterCompleteProfile({ total, profileData }) {
  return (
    <section className="profile-success-section">
      <div className="profile-success-card">
        <div className="success-badge">
          <CheckCircle size={16} />
          <span>Profile Completed Successfully!</span>
        </div>

        <div className="profile-content">
          <h1>
            We found {total.length || 0} schemes matching with
            <br />
            your profile.
          </h1>

          <p>
            Based on your identity as a {" "}
            <strong>{profileData.profile.occupation + " in " + profileData.profile.district}</strong>, these government
            initiatives are available for you to apply right now.
          </p>
        </div>

        <div className="watermark-icon">
          <BadgeCheck />
        </div>
      </div>
    </section>
  );
}
