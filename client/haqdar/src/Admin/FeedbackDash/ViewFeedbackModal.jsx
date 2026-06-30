import {
  X,
  User,
  Calendar,
  Tag,
  Mail,
  CheckCircle,
  Trash2,
} from "lucide-react";

export default function ViewFeedbackModal({open,feedback,onClose,onMarkAsRead,onDelete}) {
  if (!open || !feedback) return null;

  return (
    <div className="fm-modal-overlay">
      <div className="fm-modal">
        {/* Header */}
        <div className="fm-modal-header">
          <h2>Feedback Details</h2>

          <button className="fm-close-btn" onClick={onClose}>
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
                <h4>{feedback.category}</h4>
              </div>
            </div>

            <div className="fm-info">
              <Calendar size={18} />

              <div>
                <span>Date</span>
                <h4>
                  {new Date(feedback.createdAt).toLocaleDateString()} •{" "}
                  {new Date(feedback.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h4>
              </div>
            </div>
          </div>

          <div className="fm-grid">
            <div className="fm-info">
              <span>⭐ Rating</span>
              <h4>{feedback.rating}/5</h4>
            </div>

            <div className="fm-info">
              <span>Status</span>

              <h4>
                <span
                  className={`fm-status ${feedback.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {feedback.status}
                </span>
              </h4>
            </div>
          </div>

          <div className="fm-message">
            <span>Message</span>
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
              onClick={() => onMarkAsRead(feedback._id)}
            >
              <CheckCircle size={18} />
              Mark as Read
            </button>
          )}

          <button
            className="fm-delete-btn"
            onClick={() => onDelete(feedback._id)}
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
