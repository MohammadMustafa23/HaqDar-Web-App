import "./HomeDashBoard.css";

export default function NoSchemesFound() {
  return (
    <div className="nsf-wrapper">
      <div className="nsf-card">
        <div className="nsf-icon-box">
          <span className="nsf-icon">🔍</span>
        </div>

        <h2 className="nsf-title">
          No schemes match your current profile yet.
        </h2>

        <p className="nsf-description">
          Try updating your profile details or ask HaqDar AI for
          specific guidance on available government programs.
        </p>

        <div className="nsf-actions">
          <button className="nsf-primary-btn">
            Update Profile
          </button>

          <button className="nsf-secondary-btn">
            Ask AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}