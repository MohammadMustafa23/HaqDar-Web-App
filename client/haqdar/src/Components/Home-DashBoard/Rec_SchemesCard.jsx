import "./HomeDashBoard.css";
import {
  ArrowRight,
  IndianRupee,
  Users,
  Bookmark,
} from "lucide-react";

export default function Rec_SchemesCard({scheme,onViewDetails}) {
  if (!scheme) return null;

  return (
    <div className="rec-scheme-card">
      <button className="save-btn">
        <Bookmark size={18} />
      </button>

      <h3 className="rec-scheme-title">
        {scheme.name || "Scheme Name"}
      </h3>

      <p className="rec-scheme-desc">
        {scheme.benefit || "No benefit information available"}
      </p>

      <div className="rec-scheme-tags">
        <span className="rec-scheme-tag">
          <IndianRupee size={18} />
          {scheme.income || "N/A"}
        </span>

        <span className="rec-scheme-tag">
          <Users size={18} />
          {scheme.category || "General"}
        </span>
      </div>

      <button
        className="rec-details-btn"
        onClick={() => onViewDetails(scheme)}
      >
        Check Details
        <ArrowRight size={20} />
      </button>
    </div>
  );
}