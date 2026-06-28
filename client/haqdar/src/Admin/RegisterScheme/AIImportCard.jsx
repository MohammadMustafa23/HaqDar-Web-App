import { CheckCircle2, Upload } from "lucide-react";

const AIImportCard = () => {
  return (
    <div className="rs-ai-card">
      <div className="rs-ai-left">
        <div className="rs-ai-icon">
          <CheckCircle2 size={26} />
        </div>

        <div>
          <h3>AI Import Complete</h3>

          <p>
            Processed:
            <span> Rajasthan Tarbandi Yojana.pdf</span>
          </p>
        </div>
      </div>

      <button className="rs-change-btn">
        <Upload size={17} />
        Change File
      </button>
    </div>
  );
};

export default AIImportCard;
