import { Rocket, RotateCcw } from "lucide-react";

export default function ActionButtons({ mode, loading, onReset, onPublish }) {
  return (
    <section className="rs-action-card">
      <div className="rs-action-info">
        <h3>{mode === "edit" ? "Update Scheme" : "Ready to Publish?"}</h3>

        <p>
          Review all information before
          {mode === "edit" ? " updating" : " publishing"} this scheme.
        </p>
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

          {loading
            ? mode === "edit"
              ? "Updating..."
              : "Publishing..."
            : mode === "edit"
              ? "Update Scheme"
              : "Publish Scheme"}
        </button>
      </div>
    </section>
  );
}
