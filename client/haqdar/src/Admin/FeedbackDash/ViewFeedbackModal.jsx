import {
  X,
  User,
  Calendar,
  Tag,
  Mail,
  CheckCircle,
  Trash2,
} from "lucide-react";

export default function ViewFeedbackModal({ open, feedback, onClose }) {
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

              <h4>{feedback.name}</h4>
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
                  {feedback.date} • {feedback.time}
                </h4>
              </div>
            </div>
          </div>

          <div className="fm-message">
            <span>Message</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates cumque aspernatur nihil quaerat tempora possimus, atque
              neque officiis distinctio nemo. Provident adipisci officiis quae
              rerum.
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="fm-modal-footer">
          <button className="fm-read-btn">
            <CheckCircle size={18} />
            Mark as Read
          </button>

          <button className="fm-delete-btn">
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
