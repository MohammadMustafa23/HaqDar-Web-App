import { ShieldCheck } from "lucide-react";

const genders = ["Male", "Female", "Transgender", "Others"];

const categories = ["General", "OBC", "SC", "ST"];

const EligibilityCriteria = () => {
  return (
    <div className="rs-card">
      <div className="rs-card-title">
        <ShieldCheck size={20} />
        <h2>Eligibility Criteria</h2>
      </div>

      {/* Age */}

      <div className="rs-grid-3">
        <div className="rs-field">
          <label>Min Age</label>
          <input type="number" placeholder="18" />
        </div>

        <div className="rs-field">
          <label>Max Age</label>
          <input type="number" placeholder="100" />
        </div>

        <div className="rs-field">
          <label>Max Annual Income (₹)</label>
          <input type="number" placeholder="1000000" />
        </div>
      </div>

      {/* Gender */}

      <div className="rs-section">
        <label className="rs-section-label">Gender Eligibility</label>

        <div className="rs-pill-group">
          {genders.map((item) => (
            <button type="button" className="rs-pill active" key={item}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Category + PWD */}

      <div className="rs-bottom-grid">
        <div>
          <label className="rs-section-label">Category (Social)</label>

          <div className="rs-checkbox-grid">
            {categories.map((item) => (
              <label className="rs-checkbox" key={item}>
                <input type="checkbox" defaultChecked />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="rs-section-label">PWD Requirement</label>

          <div className="rs-radio-group">
            <label>
              <input type="radio" name="pwd" />
              Yes
            </label>

            <label>
              <input type="radio" name="pwd" />
              No
            </label>

            <label>
              <input type="radio" name="pwd" defaultChecked />
              NA
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
