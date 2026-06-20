import "./Open.css";
import { Bookmark, Wallet, Users } from "lucide-react";

export default function SchemeAbout() {
  return (
    <div className="scheme-about-card">
      <div className="scheme-about-top">
        <div>
          <span className="scheme-badge">
            CENTRAL SECTOR SCHEME
          </span>

          <h2 className="scheme-title">
            Pradhan Mantri Kisan
            <br />
            Samman Nidhi (PM-KISAN)
          </h2>

          <p className="scheme-desc">
            A government initiative providing financial stability to all
            landholding farmer families across the country with a guaranteed
            annual income support.
          </p>
        </div>

        <button className="bookmark-btn">
          <Bookmark size={20} />
        </button>
      </div>

      <div className="scheme-info-grid">
        <div className="info-card">
          <div className="info-icon">
            <Wallet size={22} />
          </div>

          <div>
            <span>Direct Financial Benefit</span>
            <h3>₹6,000 / Year</h3>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <Users size={22} />
          </div>

          <div>
            <span>Target Beneficiaries</span>
            <h3>Farmer Families</h3>
          </div>
        </div>
      </div>
    </div>
  );
}