import "./Open.css";
import { Bookmark, Wallet, Users } from "lucide-react";

export default function SchemeAbout({ scheme }) {
  if (!scheme) return null;

  return (
    <div className="scheme-about-card">
      <div className="scheme-about-top">
        <div>
          <span className="scheme-badge">
            {scheme.schemeType?.toUpperCase()}
          </span>

          <h2 className="scheme-title">
            {scheme.name}
          </h2>

          <p className="scheme-desc">
            {scheme.apply}
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
            <span>Benefits</span>
            <h3>{scheme.benefit}</h3>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <Users size={22} />
          </div>

          <div>
            <span>Beneficiaries</span>
            <h3>{scheme.beneficiary}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}