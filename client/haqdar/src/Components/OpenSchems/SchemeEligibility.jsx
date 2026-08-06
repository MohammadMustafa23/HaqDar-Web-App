import "./Open.css";
import { Briefcase, Home, Wallet } from "lucide-react";

function formatIncome(amount) {
  if (amount == null || amount === "") return "Not Specified";

  amount = Number(amount);

  if (amount >= 10000000) {
    const crore = amount / 10000000;
    return `${Number.isInteger(crore) ? crore : crore.toFixed(1)} Crore`;
  }

  if (amount >= 100000) {
    const lakh = amount / 100000;
    return `${Number.isInteger(lakh) ? lakh : lakh.toFixed(1)} Lakh`;
  }

  if (amount >= 1000) {
    const thousand = amount / 1000;
    return `${Number.isInteger(thousand) ? thousand : thousand.toFixed(1)} Thousand`;
  }

  return amount.toLocaleString("en-IN");
}

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
            {scheme.minAge && scheme.maxAge
              ? `${scheme.minAge} - ${scheme.maxAge} Years`
              : scheme.minAge
                ? `Minimum ${scheme.minAge} Years`
                : scheme.maxAge
                  ? `Up to ${scheme.maxAge} Years`
                  : "No Age Limit"}
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Wallet size={22} />
          </div>

          <h3>Annual Family Income</h3>

          <p>
            {scheme.income
              ? `Up to ₹${formatIncome(scheme.income)}`
              : "No Income Limit"}
          </p>
        </div>

        <div className="eligibility-card">
          <div className="eligibility-icon">
            <Home size={22} />
          </div>

          <h3>Eligible Category</h3>

          <p>{scheme.caste || "All Categories"}</p>
        </div>
      </div>
    </div>
  );
}
