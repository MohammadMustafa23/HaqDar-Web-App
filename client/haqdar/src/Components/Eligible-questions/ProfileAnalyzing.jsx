import "./ProfileAnalyzing.css";
import { useSchemeScanner } from "./Useschemescanner.js";

// Real scheme names the "engine" checks against, in the order they resolve.
// Mixing match/no-match outcomes is what makes the live feed read as a
// genuine evaluation rather than a scripted animation.
const SCHEMES = [
  { name: "PM Kisan Samman Nidhi", eligible: true },
  { name: "Ayushman Bharat – PMJAY", eligible: true },
  { name: "Rajasthan Chiranjeevi Yojana", eligible: true },
  { name: "PM Awas Yojana (Gramin)", eligible: false },
  { name: "National Scholarship Portal", eligible: true },
  { name: "Rajasthan Palanhar Yojana", eligible: false },
  { name: "PM Ujjwala Yojana", eligible: true },
  { name: "PM Mudra Yojana", eligible: false },
];

// Status copy tied to progress milestones, so the headline always matches
// what the live ledger below is doing.
const STAGES = [
  { min: 0, text: "Reading your profile details" },
  { min: 15, text: "Cross-checking income & category criteria" },
  { min: 35, text: "Scanning 500+ Central & Rajasthan schemes" },
  { min: 55, text: "Matching eligibility rules one by one" },
  { min: 75, text: "Ranking your best-fit schemes" },
  { min: 90, text: "Finalising your personalised list" },
  { min: 100, text: "Analysis complete" },
];

const STATUS_COPY = {
  checking: "Evaluating eligibility rules...",
  match: "Eligible under your profile",
  checked: "Requirements not satisfied",
};

const STATUS_LABEL = {
  checking: "Checking",
  match: "Matched",
  checked: "Skipped",
};

function ShieldIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2L19 6V11C19 16 15.8 20.2 12 22C8.2 20.2 5 16 5 11V6L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12.5L9.5 18L20 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Loader() {
  return <span className="hd-loader" aria-hidden="true" />;
}

export default function ProfileAnalyzing({ onComplete }) {
  const { progress, stageText, ledger, matchCount, isDone } = useSchemeScanner(
    SCHEMES,
    STAGES,
    { onComplete },
  );

  return (
    <>
      {/* ================= Premium AI Scanner ================= */}
      <div className="hd-ai-wrapper">
        <div className="hd-live-badge">
          <span className="hd-live-dot" aria-hidden="true"></span>
          <span>{isDone ? "Scan Complete" : "AI Eligibility Engine"}</span>
        </div>

        <div className={`hd-orb-container${isDone ? " is-done" : ""}`}>
          <div className="hd-orb-ring hd-ring-1"></div>
          <div className="hd-orb-ring hd-ring-2"></div>
          <div className="hd-orb-ring hd-ring-3"></div>
          <div className="hd-orb-glow"></div>
          <div className="hd-orb">
            <ShieldIcon />
          </div>
        </div>

        <h1 className="hd-title">
          {isDone ? "Your Best" : "Finding Your Best"}
          <span> Government Schemes</span>
        </h1>

        <p className="hd-subtitle">
          Our AI is securely analysing your profile and comparing it with{" "}
          <strong>500+ Central &amp; Rajasthan Government Schemes.</strong>
        </p>
      </div>

      {/* ================= Progress ================= */}
      <div className="hd-progress-card">
        <div className="hd-progress-header">
          <span role="status" aria-live="polite">
            {stageText}
          </span>
          <span>{progress}%</span>
        </div>

        <div
          className="hd-progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Eligibility scan progress"
        >
          <div className="hd-progress-fill" style={{ width: `${progress}%` }}>
            <div className="hd-progress-light"></div>
          </div>
        </div>
      </div>

      {/* ================= Quick Stats ================= */}
      <div className="hd-stats">
        <div className="hd-stat">
          <h2>500+</h2>
          <span>Schemes</span>
        </div>
        <div className="hd-stat">
          <h2>AI</h2>
          <span>Eligibility</span>
        </div>
        <div className="hd-stat">
          <h2>{matchCount}</h2>
          <span>Matched</span>
        </div>
      </div>

      {/* ================= AI Live Activity ================= */}
      <div className="hd-activity-card">
        <div className="hd-card-header">
          <div>
            <h3>AI Live Analysis</h3>
            <p>Real-time eligibility evaluation</p>
          </div>

          <div className={`hd-processing${isDone ? " done" : ""}`}>
            <span className="hd-processing-dot"></span>
            {isDone ? "Complete" : "Processing"}
          </div>
        </div>

        <div className="hd-activity-list">
          {ledger.map((item) => (
            <div key={item.index} className={`hd-activity-item ${item.status}`}>
              <div className="hd-activity-icon">
                {item.status === "checking" ? <Loader /> : <CheckIcon />}
              </div>

              <div className="hd-activity-content">
                <h4>{item.name}</h4>
                <p>{STATUS_COPY[item.status]}</p>
              </div>

              <div className={`hd-status-pill ${item.status}`}>
                {STATUS_LABEL[item.status]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= AI Summary ================= */}
      <div className="hd-summary">
        <div className="hd-summary-icon">🤖</div>
        <div>
          <h4>AI Recommendation Engine</h4>
          <p>
            Based on your age, income, category, occupation and district, our AI
            is selecting the schemes with the highest eligibility score.
          </p>
        </div>
      </div>

      {/* ================= Trust Badges ================= */}
      <div className="hd-trust">
        <div className="hd-badge">🔒 Secure Verification</div>
        <div className="hd-badge">⚡ AI Powered</div>
        <div className="hd-badge">🎯 Smart Matching</div>
        <div className="hd-badge">📄 500+ Schemes</div>
      </div>
    </>
  );
}
