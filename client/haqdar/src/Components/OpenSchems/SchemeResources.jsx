import "./Open.css";
import { FileText, Download } from "lucide-react";
import { toast } from "sonner";
import { downloadSchemePdf } from "../../Services/pdf.service.js";
export default function SchemeResources({ scheme }) {
  const handleDownload = async () => {
    try {
      const response = await downloadSchemePdf(scheme.id);

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${scheme.name}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully.");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to download PDF.";

      toast.error(message);
    }
  };
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

      <p>Get the official scheme guidelines and offline forms in PDF format.</p>

      <button className="download-btn" onClick={handleDownload}>
        Download Scheme PDF
        <Download size={16} />
      </button>
    </div>
  );
}
