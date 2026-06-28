import { Save, Rocket, RotateCcw } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="rs-action-card">
      <div className="rs-action-info">
        <h3>Ready to Publish?</h3>

        <p>
          Verify all information before publishing. Published schemes become
          visible to users immediately.
        </p>
      </div>

      <div className="rs-action-buttons">
        <button className="rs-reset-btn">
          <RotateCcw size={18} />
          Reset
        </button>

        <button className="rs-save-btn">
          <Save size={18} />
          Save Draft
        </button>

        <button className="rs-publish-btn">
          <Rocket size={18} />
          Publish Scheme
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
