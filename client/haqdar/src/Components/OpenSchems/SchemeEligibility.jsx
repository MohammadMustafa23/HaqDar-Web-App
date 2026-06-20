import "./Open.css";
import { Briefcase, Home, Wallet } from "lucide-react";

export default function SchemeEligibility() {
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
            18 - 60 Years. Usually applies
            to the head of the family as
            defined by the land records.
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Home size={22} />
          </div>

          <h3>Land Ownership</h3>

          <p>
            Families must own cultivable
            land as per the specific
            state/UT land records.
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Wallet size={22} />
          </div>

          <h3>Category</h3>

          <p>
            Open to all landholding
            families regardless of
            caste or social category.
          </p>
        </div>

      </div>
    </div>
  );
}