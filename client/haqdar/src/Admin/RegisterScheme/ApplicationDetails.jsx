import { FileText } from "lucide-react";
import { useState } from "react";

const ApplicationDetails = ({ schemeData, setSchemeData }) => {
  const [documentInput, setDocumentInput] = useState("");

  const addDocument = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const value = documentInput.trim();

    if (!value) return;

    if (schemeData.documents.includes(value)) {
      setDocumentInput("");
      return;
    }

    setSchemeData((prev) => ({
      ...prev,
      documents: [...prev.documents, value],
    }));

    setDocumentInput("");
  };

  const removeDocument = (index) => {
    setSchemeData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="rs-card">
      <div className="rs-card-title">
        <FileText size={20} />
        <h2>Application Details</h2>
      </div>
      {/* Scheme Benefit */}

      <div className="rs-field">
        <label>Scheme Benefit</label>

        <textarea
          placeholder="Describe scheme benefits..."
          value={schemeData.benefit}
          onChange={(e) =>
            setSchemeData((prev) => ({
              ...prev,
              benefit: e.target.value,
            }))
          }
        />
      </div>

      {/* Required Documents */}

      <div className="rs-field">
        <label>Required Documents</label>

        <div className="rs-doc-box">
          {schemeData.documents.map((doc, index) => (
            <span key={index} className="rs-doc-chip">
              {doc}

              <button type="button" onClick={() => removeDocument(index)}>
                ×
              </button>
            </span>
          ))}

          <input
            type="text"
            placeholder="Add document..."
            value={documentInput}
            onChange={(e) => setDocumentInput(e.target.value)}
            onKeyDown={addDocument}
          />
        </div>
      </div>

      {/* Application Process */}

      <div className="rs-field">
        <label>Application Process</label>

        <textarea
          placeholder="Describe complete application process..."
          value={schemeData.apply}
          onChange={(e) =>
            setSchemeData((prev) => ({
              ...prev,
              apply: e.target.value,
            }))
          }
        />
      </div>

      {/* Description */}

      <div className="rs-field">
        <label>Scheme Description</label>

        <textarea
          placeholder="Write complete scheme description..."
          value={schemeData.description}
          onChange={(e) =>
            setSchemeData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      </div>

      {/* Bottom */}

      <div className="rs-grid">
        <div className="rs-field">
          <label>Official Website</label>

          <input
            type="url"
            placeholder="https://..."
            value={schemeData.website}
            onChange={(e) =>
              setSchemeData((prev) => ({
                ...prev,
                website: e.target.value,
              }))
            }
          />
        </div>
        {/* Status */}

        <div className="rs-field">
          <label>Status</label>

          <select
            value={schemeData.status}
            onChange={(e) =>
              setSchemeData((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="rs-field">
          <label>Application Deadline</label>

          <input
            type="date"
            value={schemeData.deadline}
            onChange={(e) =>
              setSchemeData((prev) => ({
                ...prev,
                deadline: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
