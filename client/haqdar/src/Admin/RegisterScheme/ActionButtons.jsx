import { Rocket, RotateCcw, LoaderCircle, CheckCircle2 } from "lucide-react";

const ActionButtons = ({
  mode,
  loading,
  onReset,
  onPublish,
  processState,
}) => {
  return (
    <>
      {processState.open && (
        <div className="rs-processing-overlay">
          <div className="rs-processing-card">
            {processState.success ? (
              <CheckCircle2
                size={70}
                className="success-icon"
              />
            ) : (
              <LoaderCircle
                size={70}
                className="spin"
              />
            )}

            <h2>{processState.title}</h2>

            <p>{processState.subtitle}</p>
          </div>
        </div>
      )}

      <div className="rs-action-card">
        <div className="rs-action-info">
          <h3>
            {mode === "edit"
              ? "Update Scheme"
              : "Ready to Publish?"}
          </h3>

          <p>Verify all information before publishing.</p>
        </div>

        <div className="rs-action-buttons">
          <button
            type="button"
            className="rs-reset-btn"
            onClick={onReset}
            disabled={loading}
          >
            <RotateCcw size={18} />
            Reset
          </button>

          <button
            type="button"
            className="rs-publish-btn"
            onClick={onPublish}
            disabled={loading}
          >
            <Rocket size={18} />
            {mode === "edit"
              ? "Update Scheme"
              : "Publish Scheme"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;