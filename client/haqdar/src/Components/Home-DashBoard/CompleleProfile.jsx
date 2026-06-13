import "./HomeDashBoard.css";
import { useNavigate } from "react-router-dom";
export default function CompleteProfile() {
   const navigate = useNavigate();
  return (
    <section className="complete-profile">
      <div className="profile-left">
        <span className="badge">✨ SMART ELIGIBILITY ENGINE</span>

        <h1 className="profile-title">
          Unlock Your Full Eligibility
          <br />
          with AI
        </h1>

        <p className="profile-desc">
          Tell us a bit about yourself—like your occupation, annual income, and
          category. Our AI engine will instantly scan thousands of government
          benefits to find exactly what you're eligible for.
        </p>

        <div className="profile-footer">
          <button
            className="profile-btn"
            onClick={() => navigate("/complete-profile")}
          >
            Complete Profile →
          </button>

          <div className="users">
            <span>AS</span>
            <span>MK</span>
            <span>+12K</span>
          </div>

          <p>Joined by thousands today</p>
        </div>
      </div>

      <div className="profile-right">
        <div className="completion-header">
          <h3>COMPLETION</h3>
          <span>33%</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="steps">
          <div className="step completed">
            <span className="circle">✓</span>
            <p>Basic Information</p>
          </div>

          <div className="step">
            <span className="circle"></span>
            <p>Income & Category</p>
          </div>

          <div className="step">
            <span className="circle"></span>
            <p>Occupation Details</p>
          </div>
        </div>
      </div>
    </section>
  );
}
