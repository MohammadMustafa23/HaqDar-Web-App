import "./HomeDashBoard.css";
import {
  ArrowRight,
  IndianRupee,
  Users,
  Bookmark,
  Percent,
} from "lucide-react";
import { useState, useEffect } from "react";
import { saveScheme, removeScheme, isSaved } from "../../utils/bookmark.js";

export default function Rec_SchemesCard({ scheme, onViewDetails }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (scheme?.id) {
      setSaved(isSaved(scheme.id));
    }
  }, [scheme]);

  const handleBookmark = () => {
    if (saved) {
      removeScheme(scheme.id);
      setSaved(false);
    } else {
      saveScheme(scheme);
      setSaved(true);
    }
  };

  function formatIncome(amount) {
    amount = Number(amount);
    if (amount >= 10000000) {
      const crore = amount / 10000000;
      return `${Number.isInteger(crore) ? crore : crore.toFixed(1)} Crore`;
    }
    if (amount >= 100000) {
      const lakh = amount / 100000;
      return `${Number.isInteger(lakh) ? lakh : lakh.toFixed(1)} Lakh`;
    }
    if (amount >= 1000) {
      const thousand = amount / 1000;
      return `${Number.isInteger(thousand) ? thousand : thousand.toFixed(1)} Thousand`;
    }
    return amount.toString();
  }
  if (!scheme) return null;

  return (
    <div className="rec-scheme-card">
      <button
        className={`save-btn ${saved ? "saved" : ""}`}
        onClick={handleBookmark}
      >
        <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
      </button>

      <h3 className="rec-scheme-title">{scheme.name}</h3>

      <p className="rec-scheme-desc">
        {scheme.benefit || "No benefit information available"}
      </p>

      <div className="rec-scheme-tags">
        <span className="rec-scheme-tag">
          <Percent size={18} />
          {(scheme.score * 100).toPrecision(4) + " Matched" || "N/A"}
        </span>
        <span className="rec-scheme-tag">
          <IndianRupee size={18} />
          {scheme.income != null ? formatIncome(scheme.income) : "N/A"}
        </span>

        <span className="rec-scheme-tag">
          <Users size={18} />
          {scheme.category || "General"}
        </span>
      </div>

      <button className="rec-details-btn" onClick={() => onViewDetails(scheme)}>
        Check Details
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
