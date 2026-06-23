import "./HomeDashBoard.css";
import { useState } from "react";
import AiSidebar from "../../Pages/AiSidebar";
import { useNavigate } from "react-router-dom";
export default function NoSchemesFound() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="nsf-wrapper">
      <div className="nsf-card">
        <div className="nsf-icon-box">
          <span className="nsf-icon">🔍</span>
        </div>

        <h2 className="nsf-title">
          No schemes match your current profile yet
        </h2>

        <p className="nsf-description">
          Please complete your profile details or ask HaqDar AI for
          specific guidance on available government programs.
        </p>

        <div className="nsf-actions">
          <button className="nsf-primary-btn" onClick={() => navigate("/complete-profile")} >Complete Profile</button>

          <button className="nsf-secondary-btn" onClick={() => setIsAiOpen(true)} >Ask AI Assistant</button>
        </div>
        <AiSidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      </div>
    </div>
  );
}