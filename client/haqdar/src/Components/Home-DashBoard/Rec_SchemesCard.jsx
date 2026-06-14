import "./HomeDashBoard.css";
import {
  ArrowRight,
  IndianRupee,
  Users,
  Bookmark,
} from "lucide-react";

export default function Rec_SchemesCard() {
  return (
    <div className="rec-scheme-card">

      <button className="save-btn">
        <Bookmark size={18} />
      </button>

      <h3 className="rec-scheme-title">
        PM-Kisan Samman Nidhi
      </h3>

      <p className="rec-scheme-desc">
        Financial benefit of ₹6,000 per year in three equal installments to all
        landholding farmer families.
      </p>

      <div className="rec-scheme-tags">
        <span className="rec-scheme-tag">
          <IndianRupee size={18} />
          ₹6,000 / year
        </span>

        <span className="rec-scheme-tag">
          <Users size={18} />
          Farmers
        </span>
      </div>

      <button className="rec-details-btn">
        Check Details
        <ArrowRight size={20} />
      </button>
    </div>
  );
}