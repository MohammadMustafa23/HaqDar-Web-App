import { useEffect } from "react";
import {
  X,
  User,
  Calendar,
  Tag,
  Mail,
  CheckCircle,
  Trash2,
  Star,
} from "lucide-react";

const slugify = (text = "") => text.toLowerCase().replace(/\s+/g, "-");

export default function ViewFeedbackModal({
  open,
  feedback,
  onClose,
  onMarkAsRead,
  onDelete,
  actionLoading,
}) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !feedback) return null;

  const date = new Date(feedback.createdAt);

  return (
    <div className="fm-modal-overlay" onClick={onClose}>
      <div
        className="fm-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}

        <div className="fm-modal-header">
          <h2>Feedback Details</h2>

          <button className="fm-close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="fm-modal-body">
          <div className="fm-info">
            <User size={18} />

            <div>
              <span>Citizen</span>
              <h4>{feedback.userId?.userName}</h4>
            </div>
          </div>

          <div className="fm-info">
            <Mail size={18} />

            <div>
              <span>Email</span>
              <h4>{feedback.userId?.email}</h4>
            </div>
          </div>

          <div className="fm-info">
            <Mail size={18} />

            <div>
              <span>Subject</span>
              <h4>{feedback.subject}</h4>
            </div>
          </div>

          <div className="fm-grid">
            <div className="fm-info">
              <Tag size={18} />

              <div>
                <span>Category</span>

                <h4>
                  <span className={`fm-badge ${slugify(feedback.category)}`}>
                    {feedback.category}
                  </span>
                </h4>
              </div>
            </div>

            <div className="fm-info">
              <Calendar size={18} />

              <div>
                <span>Date</span>

                <h4>
                  {date.toLocaleDateString()} •{" "}
                  {date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h4>
              </div>
            </div>
          </div>

          <div className="fm-grid">
            <div className="fm-info">
              <Star size={18} />

              <div>
                <span>Rating</span>

                <h4>{feedback.rating}/5</h4>
              </div>
            </div>

            <div className="fm-info">
              <div>
                <span>Status</span>

                <h4>
                  <span className={`fm-status ${slugify(feedback.status)}`}>
                    {feedback.status}
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="fm-message">
            <span>Citizen Message</span>

            <p>{feedback.message}</p>
          </div>

          {feedback.adminReply && (
            <div className="fm-message">
              <span>Admin Reply</span>

              <p>{feedback.adminReply}</p>
            </div>
          )}
        </div>

        {/* Footer */}

        <div className="fm-modal-footer">
          {feedback.status === "Unread" && (
            <button
              className="fm-read-btn"
              disabled={actionLoading}
              onClick={() => onMarkAsRead(feedback._id)}
            >
              <CheckCircle size={18} />

              {actionLoading ? "Please wait..." : "Mark as Read"}
            </button>
          )}

          <button
            className="fm-delete-btn"
            disabled={actionLoading}
            onClick={() => onDelete(feedback._id)}
          >
            <Trash2 size={18} />

            {actionLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
