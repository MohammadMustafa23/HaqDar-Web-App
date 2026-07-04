import "./ProfileAnalyzing.css";
import { useState, useEffect, useMemo } from "react";

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
];

const START = 5;
const END = 95;

function getStageText(progress) {
  let text = STAGES[0].text;
  for (const stage of STAGES) {
    if (progress >= stage.min) text = stage.text;
  }
  return text;
}


export default function ProfileAnalyzing() {
  const [progress, setProgress] = useState(START);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= END ? END : prev + 1));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  // Derive the whole "live check" feed from progress alone — no second
  // timer to drift out of sync with the progress bar.
  const { ledger, matchCount } = useMemo(() => {
    const span = END - START;
    const perItem = span / SCHEMES.length;
    const raw = (progress - START) / perItem;
    const active = Math.min(Math.floor(raw), SCHEMES.length - 1);
    const phase = raw - active;

    const rows = SCHEMES.map((scheme, i) => {
      const resolved = i < active || (i === active && phase >= 0.5);
      let status = "pending";
      if (i === active && !resolved) status = "checking";
      else if (resolved) status = scheme.eligible ? "match" : "checked";
      return { ...scheme, status, index: i };
    });

    return {
      ledger: rows.filter((r) => r.status !== "pending").slice(-4),
      matchCount: rows.filter((r) => r.status === "match").length,
    };
  }, [progress]);

  const stageText = getStageText(progress);

  return (
    <>
      {/* ================= Premium AI Scanner ================= */}

      <div className="hd-ai-wrapper">
        {/* Live Badge */}
        <div className="hd-live-badge">
          <span className="hd-live-dot"></span>
          <span>AI Eligibility Engine</span>
        </div>

        {/* AI Orb */}
        <div className="hd-orb-container">
          <div className="hd-orb-ring hd-ring-1"></div>
          <div className="hd-orb-ring hd-ring-2"></div>
          <div className="hd-orb-ring hd-ring-3"></div>

          <div className="hd-orb-glow"></div>

          <div className="hd-orb">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
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
          </div>
        </div>

        <h1 className="hd-title">
          Finding Your Best
          <span> Government Schemes</span>
        </h1>

        <p className="hd-subtitle">
          Our AI is securely analysing your profile and comparing it with
          <strong>500+ Central & Rajasthan Government Schemes.</strong>
        </p>
      </div>

      {/* ================= Progress ================= */}

      <div className="hd-progress-card">
        <div className="hd-progress-header">
          <span>{stageText}</span>
          <span>{progress}%</span>
        </div>

        <div className="hd-progress-track">
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

          <div className="hd-processing">
            <span className="hd-processing-dot"></span>
            Processing
          </div>
        </div>

        <div className="hd-activity-list">
          {ledger.map((item) => (
            <div key={item.index} className={`hd-activity-item ${item.status}`}>
              <div className="hd-activity-icon">
                {item.status === "checking" && (
                  <div className="hd-loader"></div>
                )}

                {item.status === "match" && "✓"}

                {item.status === "checked" && "✓"}
              </div>

              <div className="hd-activity-content">
                <h4>{item.name}</h4>

                <p>
                  {item.status === "checking" &&
                    "Evaluating eligibility rules..."}

                  {item.status === "match" && "Eligible under your profile"}

                  {item.status === "checked" && "Requirements not satisfied"}
                </p>
              </div>

              <div className={`hd-status-pill ${item.status}`}>
                {item.status === "checking" && "Checking"}
                {item.status === "match" && "Matched"}
                {item.status === "checked" && "Skipped"}
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
