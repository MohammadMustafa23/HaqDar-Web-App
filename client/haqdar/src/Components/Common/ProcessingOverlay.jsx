import {
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";
import './ProcessingOverlay.css'
const ProcessingOverlay = ({
  open,
  success,
  title,
  subtitle,
}) => {
  if (!open) return null;

  return (
    <div className="processing-overlay">
      <div className="processing-card">

        <div className="processing-icon">
          {success ? (
            <CheckCircle2 size={72} />
          ) : (
            <LoaderCircle
              size={72}
              className="processing-spin"
            />
          )}
        </div>

        <h2>{title}</h2>

        <p>{subtitle}</p>

        {!success && (
          <>
            <div className="processing-bar">
              <div className="processing-bar-fill"></div>
            </div>

            <small>
              Please don't close this page.
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default ProcessingOverlay;