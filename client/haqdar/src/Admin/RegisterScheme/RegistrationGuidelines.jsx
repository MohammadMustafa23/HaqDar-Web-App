
import { CircleAlert, ShieldCheck, FileCheck, Sparkles } from "lucide-react";

const RegistrationGuidelines = () => {
  return (
    <div className="rs-guide-card">
      <div className="rs-guide-header">
        <div className="rs-guide-icon">
          <CircleAlert size={22} />
        </div>

        <div>
          <h3>Registration Guidelines</h3>
          <p>
            Please review these important instructions before publishing a
            government scheme.
          </p>
        </div>
      </div>

      <div className="rs-guide-list">
        <div className="rs-guide-item">
          <ShieldCheck size={18} />

          <div>
            <h4>Verify Official Information</h4>

            <p>
              Ensure all scheme details are taken from official government
              notifications or department websites.
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <FileCheck size={18} />

          <div>
            <h4>Check Eligibility Carefully</h4>

            <p>
              Age, income, caste, gender and required documents should exactly
              match the official notification.
            </p>
          </div>
        </div>

        <div className="rs-guide-item">
          <Sparkles size={18} />

          <div>
            <h4>Review AI Imported Data</h4>

            <p>
              AI helps populate fields automatically, but manual verification is
              strongly recommended before publishing.
            </p>
          </div>
        </div>
      </div>

      <div className="rs-guide-footer">
        <strong>Note:</strong>
        Once published, the scheme becomes visible to users immediately. You can
        still edit or deactivate it later from the admin dashboard.
      </div>
    </div>
  );
};

export default RegistrationGuidelines;
