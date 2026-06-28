import { FileText } from "lucide-react";

const documents = [
  "Aadhaar Card",
  "Jan Aadhaar",
  "Income Certificate",
  "Caste Certificate",
  "Bank Passbook",
];

const ApplicationDetails = () => {
  return (
    <div className="rs-card">
      <div className="rs-card-title">
        <FileText size={20} />
        <h2>Application Details</h2>
      </div>

      {/* Required Documents */}

      <div className="rs-field">
        <label>Required Documents</label>

        <div className="rs-doc-box">
          {documents.map((doc) => (
            <span key={doc} className="rs-doc-chip">
              {doc}

              <button type="button">×</button>
            </span>
          ))}

          <input type="text" placeholder="Add document..." />
        </div>
      </div>

      {/* Application Process */}

      <div className="rs-field">
        <label>Application Process</label>

        <textarea placeholder="Describe complete application process..."></textarea>
      </div>

      {/* Description */}

      <div className="rs-field">
        <label>Scheme Description</label>

        <textarea placeholder="Write complete scheme description..."></textarea>
      </div>

      {/* Bottom */}

      <div className="rs-grid">
        <div className="rs-field">
          <label>Official Website</label>

          <input type="url" placeholder="https://..." />
        </div>

        <div className="rs-field">
          <label>Application Deadline</label>

          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
