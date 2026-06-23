import "./HowWork.css";
import { FaUser, FaSearch, FaCompass, FaGlobe } from "react-icons/fa";
export default function HowWork({howWorkRef}) {
  return (
    <div className="howworks-section" ref={howWorkRef}>
      <h1 className="howworks-title">How it Works</h1>

      <p className="howworks-subtitle">
        Follow these simple steps to access the government support you deserve.
      </p>

      <div className="howworks-cards">
        <div className="howworks-card">
          <h3 className="howworks-number">[01]</h3>

          <div className="howworks-icon">
            <FaUser />
          </div>

          <h2 className="howworks-card-title">Create Profile</h2>

          <p className="howworks-card-text">
            Enter your basic details to get started.
          </p>
        </div>

        <div className="howworks-card">
          <h3 className="howworks-number">[02]</h3>

          <div className="howworks-icon">
            <FaSearch />
          </div>

          <h2 className="howworks-card-title">Check Eligibility</h2>

          <p className="howworks-card-text">
            Find schemes that match your profile.
          </p>
        </div>

        <div className="howworks-card">
          <h3 className="howworks-number">[03]</h3>

          <div className="howworks-icon">
            <FaCompass />
          </div>

          <h2 className="howworks-card-title">Explore Schemes</h2>

          <p className="howworks-card-text">
            Review benefits, requirements, and documents.
          </p>
        </div>

        <div className="howworks-card">
          <h3 className="howworks-number">[04]</h3>

          <div className="howworks-icon">
            <FaGlobe />
          </div>

          <h2 className="howworks-card-title">Access Resources</h2>

          <p className="howworks-card-text">
            Visit trusted government sources for complete info.
          </p>
        </div>
      </div>
    </div>
  );
}
