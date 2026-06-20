import "./Open.css";
import {
  Fingerprint,
  Landmark,
  Mountain,
  Smartphone,
} from "lucide-react";

export default function SchemeDocuments() {
  return (
    <div className="documents-section">
      <div className="documents-header">
        <h2>Required Documents</h2>
      </div>

      <div className="documents-grid">

        <div className="document-card">
          <div className="document-icon">
            <Fingerprint size={22} />
          </div>

          <div>
            <h3>Aadhaar Card</h3>
            <p>
              Mandatory for identity
              verification and linking
              with bank account.
            </p>
          </div>
        </div>

        <div className="document-card">
          <div className="document-icon">
            <Landmark size={22} />
          </div>

          <div>
            <h3>Bank Passbook</h3>
            <p>
              Needed for direct
              benefit transfer (DBT)
              of funds.
            </p>
          </div>
        </div>

        <div className="document-card">
          <div className="document-icon">
            <Mountain size={22} />
          </div>

          <div>
            <h3>Land Holding Papers</h3>
            <p>
              Official registry
              documents proving
              ownership of cultivable land.
            </p>
          </div>
        </div>

        <div className="document-card">
          <div className="document-icon">
            <Smartphone size={22} />
          </div>

          <div>
            <h3>Mobile Number</h3>
            <p>
              Active number linked to
              Aadhaar for OTP
              verification.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}