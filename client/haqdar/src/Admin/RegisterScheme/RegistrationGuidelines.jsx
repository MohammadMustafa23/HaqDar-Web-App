import {
  CircleAlert,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Database,
  Braces,
} from "lucide-react";

const RegistrationGuidelines = () => {
  return (
    <div className="rs-guide-card">
      <div className="rs-guide-header">
        <div className="rs-guide-icon">
          <CircleAlert size={22} />
        </div>

        <div>
          <h3>Scheme Registration Guidelines</h3>
          <p>
            Follow these instructions carefully before publishing or importing
            government schemes.
          </p>
        </div>
      </div>

      <div className="rs-guide-list">
        <div className="rs-guide-item">
          <ShieldCheck size={18} />

          <div>
            <h4>Use Official Government Sources</h4>

            <p>
              Enter information only from official government notifications,
              department portals, or verified circulars.
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <FileCheck size={18} />

          <div>
            <h4>Fill Every Required Field</h4>

            <p>
              Scheme Name, Category, Beneficiary, Eligibility, Benefits,
              Required Documents and Application Process must be completed
              before publishing.
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <Sparkles size={18} />

          <div>
            <h4>Verify AI Generated Content</h4>

            <p>
              AI can auto-fill information, but every field should be reviewed
              manually before saving.
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <Database size={18} />

          <div>
            <h4>Data Entry Format</h4>

            <p>
              • Age: Numeric values only (18 - 60)
              <br />
              • Income: Annual amount in INR (100000)
              <br />
              • Documents: One document per line or list item
              <br />
              • Benefits: Clear and concise description
              <br />• URLs: Include full https:// links
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <Braces size={18} />

          <div>
            <h4>JSON Upload Format</h4>

            <p>
              Upload only a valid <strong>.json</strong> file containing an
              array of scheme objects.
            </p>

            <pre className="rs-json-example">
              {`[
  {
    "no": 1,
    "name": "Mukhyamantri Yojana",
    "schemeType": "State",
    "category": "Education",
    "beneficiary": "Students",
    "eligibility": {
      "gender": "All",
      "caste": "All",
      "age": {
        "min": 18,
        "max": 35
      }
    },
    "benefit": "...",
    "documents": ["Aadhaar", "Income Certificate"],
    "apply": "...",
    "status": "Active"
  }
]`}
            </pre>
          </div>
        </div>
      </div>

      <div className="rs-guide-footer">
        <strong>Important:</strong> After publishing, the scheme becomes
        immediately visible to users. You can edit, deactivate, or delete it
        later from the admin dashboard.
      </div>
    </div>
  );
};

export default RegistrationGuidelines;
