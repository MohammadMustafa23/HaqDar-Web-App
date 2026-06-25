import {
  Bookmark,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { saveScheme, removeScheme, isSaved } from "../../utils/bookmark.js";

export default function SchemeCard({ scheme,onViewDetails }) {
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
  const getIcon = () => {
    return <Shield size={18} />;
  };

  return (
    <article className="hs-card">
      <div className="hs-card-header">
        <div className="hs-card-icon">{getIcon()}</div>
        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={handleBookmark}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <h3 className="hs-card-title">{scheme.title}</h3>

      <p className="hs-card-description">{scheme.desc}</p>

      <div className="hs-card-tags">
        {scheme.tags?.map((tag, index) => (
          <span key={index} className="hs-card-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="hs-card-footer">
        <span className="hs-card-match">{scheme.match}% Match</span>

        <button className="hs-card-btn"  onClick={() => onViewDetails(scheme)}>
          Check Details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}
