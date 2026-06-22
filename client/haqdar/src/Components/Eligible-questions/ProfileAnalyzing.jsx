import "./ProfileAnalyzing.css";
import { useState,useEffect } from "react";
export default function ProfileAnalyzing() {

  const [progress, setProgress] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="hd-analysis-screen">
      <div className="hd-analysis-container">
        <div className="hd-analysis-visual">
          <div className="hd-orbit hd-orbit-1"></div>
          <div className="hd-orbit hd-orbit-2"></div>

          <div className="hd-core-card">
            <div className="hd-core-icon">🔍</div>
          </div>
        </div>

        <div className="hd-analysis-content">
          <h1>Finding Your Best Schemes</h1>

          <p>
            Our AI is matching your profile against
            <strong> 500+ Central & Rajasthan Government Schemes</strong>
          </p>

          <div className="hd-progress-wrapper">
            <div className="hd-progress-bar">
              <div
                className="hd-progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="hd-progress-meta">
              <span>Analyzing eligibility criteria...</span>
              <span>{progress}%</span>
            </div>
          </div>

          <div className="hd-analysis-tags">
            <div className="hd-analysis-tag">🔒 Secure Verification</div>

            <div className="hd-analysis-tag">⚡ AI Eligibility Match</div>

            <div className="hd-analysis-tag">🎯 Benefit Mapping</div>
          </div>
        </div>
      </div>
    </div>
  );
}
