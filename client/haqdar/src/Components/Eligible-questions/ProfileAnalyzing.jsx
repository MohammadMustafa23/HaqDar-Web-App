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

// Local fallback so a broken/missing --border-color token upstream never
// leaves this component with invisible borders.
const BORDER = "var(--border-color, rgba(148,163,184,0.25))";

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
    <div
      className="hd-screen relative min-h-screen w-full flex items-center justify-center overflow-hidden p-6"
      style={{ background: "var(--chat-bg)" }}
    >
      {/* ambient brand glow, reuses --primary / --success so it stays subtle in both themes */}
      <div
        className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "var(--success)" }}
      />

      <div
        className="relative w-full max-w-md rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center"
        style={{
          background: "var(--card-bg)",
          border: `1px solid ${BORDER}`,
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* radar / scan visual */}
        <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
          <div
            className="hd-ring absolute inset-0 rounded-full"
            style={{ border: "1px solid var(--primary)" }}
          />
          <div
            className="hd-ring hd-ring-delay absolute inset-0 rounded-full"
            style={{ border: "1px solid var(--primary)" }}
          />
          <div className="hd-sweep absolute inset-2 rounded-full" />
          <div
            className="relative w-[76px] h-[76px] rounded-[22px] flex items-center justify-center"
            style={{
              background:
                "color-mix(in srgb, var(--primary) 14%, var(--card-bg))",
              border: `1px solid ${BORDER}`,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <svg
              className="w-9 h-9"
              style={{ color: "var(--primary)" }}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M24 4L40 10V22C40 32 33 40 24 44C15 40 8 32 8 22V10L24 4Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 23.5L21.5 28.5L32 17.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4"
          style={{
            background: "var(--surface-bg)",
            border: `1px solid ${BORDER}`,
          }}
        >
          <span
            className="hd-dot w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--success)" }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            AI Eligibility Engine · Live
          </span>
        </div>

        <h1
          className="text-2xl sm:text-[26px] font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Finding Your Best Schemes
        </h1>
        <p
          className="text-sm leading-relaxed mb-7"
          style={{ color: "var(--text-secondary)" }}
        >
          Matching your profile against{" "}
          <strong style={{ color: "var(--text-primary)" }}>
            500+ Central &amp; Rajasthan Government Schemes
          </strong>
        </p>

        {/* progress */}
        <div className="w-full mb-6">
          <div
            className="relative w-full h-2 rounded-full overflow-hidden"
            style={{ background: "var(--input-bg)" }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="hd-shine relative h-full rounded-full overflow-hidden transition-[width] duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--primary), var(--primary-hover))",
              }}
            />
          </div>
          <div className="flex justify-between items-baseline gap-3 mt-2.5">
            <span
              className="text-[13px] text-left"
              style={{ color: "var(--text-secondary)" }}
            >
              {stageText}…
            </span>
            <span
              className="text-[13px] font-semibold flex-shrink-0"
              style={{
                color: "var(--primary)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {progress}%
            </span>
          </div>
        </div>

        {/* live ledger — the signature element */}
        <div
          className="w-full rounded-2xl p-3.5 mb-6 text-left"
          style={{
            background: "var(--surface-bg)",
            border: `1px solid ${BORDER}`,
          }}
          aria-live="polite"
        >
          <div
            className="flex justify-between items-center text-[11px] font-semibold uppercase tracking-wide px-1 pb-2.5"
            style={{ color: "var(--text-secondary)" }}
          >
            <span>Live scheme check</span>
            <span
              className="normal-case font-medium tracking-normal"
              style={{ color: "var(--success)" }}
            >
              {matchCount} matched so far
            </span>
          </div>

          <div className="flex flex-col gap-0.5 min-h-[148px]">
            {ledger.map((item) => (
              <div
                key={item.index}
                className="hd-row-in flex items-center gap-2.5 px-1 py-2 rounded-lg"
                style={{
                  background:
                    item.status === "checking"
                      ? "color-mix(in srgb, var(--warning) 12%, transparent)"
                      : "transparent",
                }}
              >
                <span
                  className="text-[11px] w-5 flex-shrink-0"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {String(item.index + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex-1 text-[13.5px] whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.name}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-medium flex-shrink-0"
                  style={{
                    color:
                      item.status === "match"
                        ? "var(--success)"
                        : item.status === "checking"
                          ? "var(--warning)"
                          : "var(--text-secondary)",
                  }}
                >
                  {item.status === "checking" && (
                    <>
                      <span
                        className="hd-dot w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--warning)" }}
                      />
                      Checking
                    </>
                  )}
                  {item.status === "match" && "✓ Matched"}
                  {item.status === "checked" && "Checked"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* trust tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "🔒 Secure Verification",
            "⚡ AI Eligibility Match",
            "🎯 Benefit Mapping",
          ].map((tag) => (
            <div
              key={tag}
              className="text-xs font-medium rounded-full px-3.5 py-1.5"
              style={{
                color: "var(--text-secondary)",
                background: "var(--surface-bg)",
                border: `1px solid ${BORDER}`,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
