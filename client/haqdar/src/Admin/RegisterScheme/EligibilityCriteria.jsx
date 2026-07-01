import { ShieldCheck } from "lucide-react";

const genders = ["Male", "Female","Others","All"];

const categories = ["General","OBC","SC","ST","All"];

const EligibilityCriteria = ({ schemeData, setSchemeData }) => {
  const eligibility = schemeData.eligibility;

  const updateEligibility = (field, value) => {
    setSchemeData((prev) => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        [field]: value,
      },
    }));
  };

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

          <input
            type="number"
            value={eligibility.age.min}
            onChange={(e) =>
              setSchemeData((prev) => ({
                ...prev,
                eligibility: {
                  ...prev.eligibility,
                  age: {
                    ...prev.eligibility.age,
                    min: e.target.value,
                  },
                },
              }))
            }
          />
        </div>

        <div className="rs-field">
          <label>Max Age</label>

          <input
            type="number"
            value={eligibility.age.max}
            onChange={(e) =>
              setSchemeData((prev) => ({
                ...prev,
                eligibility: {
                  ...prev.eligibility,
                  age: {
                    ...prev.eligibility.age,
                    max: e.target.value,
                  },
                },
              }))
            }
          />
        </div>

        <div className="rs-field">
          <label>Max Annual Income (₹)</label>

          <input
            type="number"
            value={eligibility.income}
            onChange={(e) => updateEligibility("income", e.target.value)}
          />
        </div>
      </div>

      {/* Gender */}

      <div className="rs-section">
        <label className="rs-section-label">Gender Eligibility</label>

        <div className="rs-pill-group">
          {genders.map((item) => (
            <button
              key={item}
              type="button"
              className={`rs-pill ${
                eligibility.gender === item ? "active" : ""
              }`}
              onClick={() => updateEligibility("gender", item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}

      <div className="rs-bottom-grid">
        <div>
          <label className="rs-section-label">Category (Social)</label>

          <div className="rs-pill-group">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`rs-pill ${
                  eligibility.caste === item ? "active" : ""
                }`}
                onClick={() => updateEligibility("caste", item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
