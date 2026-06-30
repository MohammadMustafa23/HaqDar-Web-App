import { useState } from "react";
import { Eye } from "lucide-react";
import {
  resolveFeedback,
  deleteFeedback,
} from "../../Services/feedback.service.js";
import { toast } from "sonner";
import FeedbackPagination from "./FeedbackPagination";
import ViewFeedbackModal from "./ViewFeedbackModal";
import ConfirmationModal from "../../Components/Common/ConfirmationModal.jsx";
export default function FeedbackTable({ feedbacks, fetchFeedbacks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 5;

  const indexOfLast = currentPage * feedbacksPerPage;
  const indexOfFirst = indexOfLast - feedbacksPerPage;

  const currentFeedbacks = feedbacks.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  const [confirmModal, setConfirmModal] = useState({
    open: false,
    type: "warning",
    title: "",
    message: "",
    confirmText: "",
    action: null,
  });

  const [actionLoading, setActionLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleMarkAsRead = (id) => {
    setSelected(null);
    setConfirmModal({
      open: true,
      type: "success",
      title: "Mark as Read",
      message: "Are you sure you want to mark this feedback as read?",
      confirmText: "Mark as Read",

      action: async () => {
        try {
          setActionLoading(true);
          const res = await resolveFeedback(id);
          toast.success(res.message || "Feedback marked as read.");
          await fetchFeedbacks();
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Failed to update feedback.",
          );
        } finally {
          setActionLoading(false);

          setConfirmModal((prev) => ({
            ...prev,
            open: false,
          }));
        }
      },
    });
  };

  const handleDelete = (id) => {
    setSelected(null);
    setConfirmModal({
      open: true,
      type: "danger",
      title: "Delete Feedback",
      message:
        "Are you sure you want to permanently delete this feedback? This action cannot be undone.",
      confirmText: "Delete",

      action: async () => {
        try {
          setActionLoading(true);
          const res = await deleteFeedback(id);
          toast.success(res.message || "Feedback deleted.");
          await fetchFeedbacks();
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Failed to delete feedback.",
          );
        } finally {
          setActionLoading(false);

          setConfirmModal((prev) => ({
            ...prev,
            open: false,
          }));
        }
      },
    });
  };

  return (
    <>
      <div className="fm-table-wrapper">
        <div className="fm-table-scroll">
          <table className="fm-table">
            <thead>
              <tr>
                <th>Citizen Name</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Date Submitted</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentFeedbacks.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="fm-user">
                      <strong>{item.userId?.userName}</strong>
                    </div>
                  </td>

                  <td>{item.subject}</td>

                  <td>
                    <span
                      className={`fm-badge ${item.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.category}
                    </span>
                  </td>

                  <td>
                    {new Date(item.createdAt).toLocaleDateString()}
                    <br />
                    <span className="fm-time">
                      {new Date(item.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>

                  <td>
                    <span className="fm-rating">⭐ {item.rating}/5</span>
                  </td>

                  <td>
                    <span
                      className={`fm-status ${item.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="fm-view-btn"
                      onClick={() => setSelected(item)}
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FeedbackPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={feedbacks.length}
          itemsPerPage={feedbacksPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <ViewFeedbackModal
        open={selected}
        feedback={selected}
        onClose={() => setSelected(null)}
        onMarkAsRead={handleMarkAsRead}
        onDelete={handleDelete}
        actionLoading={actionLoading}
      />
      <ConfirmationModal
        open={confirmModal.open}
        type={confirmModal.type}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmText={confirmModal.confirmText}
        loading={actionLoading}
        onCancel={() =>
          setConfirmModal((prev) => ({
            ...prev,
            open: false,
          }))
        }
        onConfirm={confirmModal.action}
      />
    </>
  );
}
