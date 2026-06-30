import {
  TriangleAlert,
  Trash2,
  CheckCircle2,
  CircleHelp,
  X,
  LoaderCircle,
} from "lucide-react";

import "./ConfirmationModal.css";

export default function ConfirmationModal({
  open,
  type = "danger", // danger | warning | success | info
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  closeOnOverlay = true,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  const getIcon = () => {
    switch (type) {
      case "danger":
        return <Trash2 size={42} />;
      case "warning":
        return <TriangleAlert size={42} />;
      case "success":
        return <CheckCircle2 size={42} />;
      default:
        return <CircleHelp size={42} />;
    }
  };

  return (
    <div
      className="cm-overlay"
      onClick={() => {
        if (!loading && closeOnOverlay) onCancel();
      }}
    >
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}

        <button className="cm-close-btn" onClick={onCancel} disabled={loading}>
          <X size={20} />
        </button>

        {/* Icon */}

        <div className={`cm-icon cm-${type}`}>{getIcon()}</div>

        {/* Title */}

        <h2 className="cm-title">{title}</h2>

        {/* Message */}

        <p className="cm-message">{message}</p>

        {/* Footer */}

        <div className="cm-footer">
          <button
            className="cm-btn cm-btn-cancel"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelText}
          </button>

          <button
            className={`cm-btn cm-btn-${type}`}
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? (
              <>
                <LoaderCircle size={18} className="cm-spin" />
                Please Wait...
              </>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
