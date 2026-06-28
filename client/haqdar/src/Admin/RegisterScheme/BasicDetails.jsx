import { Info } from "lucide-react";

const BasicDetails = () => {
  return (
    <div className="rs-card">
      <div className="rs-card-title">
        <Info size={20} />
        <h2>Basic Details</h2>
      </div>

      <div className="rs-grid">
        <div className="rs-field rs-full">
          <label>Scheme Name</label>

          <input type="text" placeholder="Enter Scheme Name" />
        </div>

        <div className="rs-field">
          <label>Category</label>

          <select>
            <option>Agriculture</option>
            <option>Education</option>
            <option>Health</option>
            <option>Women</option>
            <option>Employment</option>
            <option>Housing</option>
          </select>
        </div>

        <div className="rs-field">
          <label>Benefit Type</label>

          <select>
            <option>Subsidy</option>
            <option>Scholarship</option>
            <option>Loan</option>
            <option>Insurance</option>
            <option>Pension</option>
          </select>
        </div>

        <div className="rs-field">
          <label>Benefit Amount (₹)</label>

          <input type="number" placeholder="48000" />
        </div>

        <div className="rs-field">
          <label>Issuing Authority</label>

          <input type="text" placeholder="Agriculture Department, Rajasthan" />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
