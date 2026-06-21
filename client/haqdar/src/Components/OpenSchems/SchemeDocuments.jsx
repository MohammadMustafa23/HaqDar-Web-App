import "./Open.css";
import {
  Fingerprint,
  Landmark,
  Mountain,
  Smartphone,
} from "lucide-react";

export default function SchemeDocuments({ scheme }) {
  if (!scheme) return null;

  const documents = scheme.documents
    ? scheme.documents.split(",").map((doc) => doc.trim())
    : [];

  const icons = [
    Fingerprint,
    Landmark,
    Mountain,
    Smartphone,
  ];

  return (
    <div className="documents-section">
      <div className="documents-header">
        <h2>Required Documents</h2>
      </div>

      <div className="documents-grid">
        {documents.map((doc, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div className="document-card" key={index}>
              <div className="document-icon">
                <Icon size={22} />
              </div>

              <div>
                <h3>{doc}</h3>
                <p>Required for scheme verification and application.</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}