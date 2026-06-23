import {
  Bookmark,
  GraduationCap,
  Tractor,
  Shield,
  Home,
  ArrowRight,
} from "lucide-react";

export default function SchemeCard({ scheme }) {
  const getIcon = () => {
    if (scheme.title?.includes("Kisan"))
      return <Tractor size={18} />;

    if (scheme.title?.includes("Scholarship"))
      return <GraduationCap size={18} />;

    if (scheme.title?.includes("Housing"))
      return <Home size={18} />;

    return <Shield size={18} />;
  };

  return (
    <article className="hs-card">
      <div className="hs-card-header">
        <div className="hs-card-icon">
          {getIcon()}
        </div>

        <button className="hs-card-bookmark">
          <Bookmark
            size={16}
            fill={scheme.saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      <h3 className="hs-card-title">
        {scheme.title}
      </h3>

      <p className="hs-card-description">
        {scheme.desc}
      </p>

      <div className="hs-card-tags">
        {scheme.tags?.map((tag, index) => (
          <span
            key={index}
            className="hs-card-tag"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="hs-card-footer">
        <span className="hs-card-match">
          {scheme.match}% Match
        </span>

        <button className="hs-card-btn">
          Check Details
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}