import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { useRef } from "react";

const AIImportCard = ({
  fileName,
  uploading,
  progress = 0,
  status = "",
  onFileUpload,
}) => {
  const inputRef = useRef();
  return (
    <div className="rs-ai-card">
      <div className="rs-ai-left">
        <div className="rs-ai-icon">
          {uploading ? (
            <Loader2 size={26} className="spin" />
          ) : (
            <CheckCircle2 size={26} />
          )}
        </div>

        <div>
          <h3>{uploading ? "Uploading Schemes..." : "AI Import Complete"}</h3>

          <p>
            Processed:
            <span>{fileName || "No file selected"}</span>
          </p>

          {uploading && (
            <>
              <div className="rs-progress">
                <div
                  className="rs-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="rs-progress-info">
                <span>{status}</span>
                <span>{progress}%</span>
              </div>
            </>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".json"
        hidden
        onChange={onFileUpload}
      />

      <button
        className="rs-change-btn"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? (
          <>
            <Loader2 size={17} className="spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload size={17} />
            Change File
          </>
        )}
      </button>
    </div>
  );
};

export default AIImportCard;