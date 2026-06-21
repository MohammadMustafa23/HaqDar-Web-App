import "./Open.css";
import { Briefcase, Home, Wallet } from "lucide-react";

export default function SchemeEligibility({ scheme }) {
  if (!scheme) return null;

  return (
    <div className="eligibility-section">
      <div className="eligibility-header">
        <h2>Eligibility Criteria</h2>
      </div>

      <div className="eligibility-grid">

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Briefcase size={22} />
          </div>

          <h3>Age Requirement</h3>

          <p>
            {scheme.age || "Not Specified"}
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Wallet size={22} />
          </div>

          <h3>Income Requirement</h3>

          <p>
            {scheme.income || "Not Specified"}
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Home size={22} />
          </div>

          <h3>Eligible Category</h3>

          <p>
            {scheme.caste || "All Categories"}
          </p>
        </div>

      </div>
    </div>
  );
}