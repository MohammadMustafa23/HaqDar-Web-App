import "./Open.css";
import { FileText, Download } from "lucide-react";

export default function SchemeResources() {
  return (
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-icon">
          <FileText size={18} />
        </div>

        <div>
          <h3>Download Resources</h3>
          <span>OFFICIAL DOCUMENTS</span>
        </div>
      </div>

      <p>
        Get the official scheme
        guidelines and offline forms
        in PDF format.
      </p>

      <button className="download-btn">
        Download Scheme PDF
        <Download size={16} />
      </button>
    </div>
  );
}