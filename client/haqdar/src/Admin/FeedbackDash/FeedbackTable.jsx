import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import FeedbackRow from "./FeedbackRow";
import FeedbackPagination from "./FeedbackPagination";
import ViewFeedbackModal from "./ViewFeedbackModal";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";
import {
  deleteFeedback,
  resolveFeedback,
  showAllowFeature,
} from "../../Services/feedback.service";

export default function FeedbackTable({
  feedbacks = [],
  filters,
  fetchFeedbacks,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const [selected, setSelected] = useState(null);

  const [actionLoading, setActionLoading] = useState(false);

  const [confirmModal, setConfirmModal] = useState({
    open: false,
    type: "warning",
    title: "",
    message: "",
    confirmText: "",
    action: null,
  });

  const feedbacksPerPage = 5;

  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter((feedback) => {
      const search =
        feedback.userId?.userName
          ?.toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        feedback.subject?.toLowerCase().includes(filters.search.toLowerCase());

      const category =
        filters.category === "All" || feedback.category === filters.category;

      const status =
        filters.status === "All" || feedback.status === filters.status;

      return search && category && status;
    });
  }, [feedbacks, filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredFeedbacks.length / feedbacksPerPage);

  const indexOfLast = currentPage * feedbacksPerPage;

  const indexOfFirst = indexOfLast - feedbacksPerPage;

  const currentFeedbacks = filteredFeedbacks.slice(indexOfFirst, indexOfLast);

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

          toast.success(res.message);

          await fetchFeedbacks();
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Unable to update feedback.",
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
        "This feedback will be permanently deleted. This action cannot be undone.",
      confirmText: "Delete",

      action: async () => {
        try {
          setActionLoading(true);

          const res = await deleteFeedback(id);

          toast.success(res.message);

          await fetchFeedbacks();
        } catch (error) {
          toast.error(
            error.response?.data?.message || "Unable to delete feedback.",
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

  const handleToggleFeature = (id, isFeatured) => {
    setSelected(null);

    setConfirmModal({
      open: true,
      type: "info",
      title: isFeatured ? "Remove Featured" : "Feature Feedback",
      message: isFeatured
        ? "Are you sure you want to remove this feedback from the homepage?"
        : "Are you sure you want to feature this feedback on the homepage?",
      confirmText: isFeatured ? "Remove" : "Feature",

      action: async () => {
        try {
          setActionLoading(true);

          const res = await showAllowFeature(id);

          toast.success(res.message);

          await fetchFeedbacks();
        } catch (error) {
          toast.error(
            error.response?.data?.message ||
              "Unable to update featured feedback.",
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
                <th>Citizen</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentFeedbacks.length > 0 ? (
                currentFeedbacks.map((item) => (
                  <FeedbackRow
                    key={item._id}
                    item={item}
                    onView={setSelected}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="fm-empty">
                    No feedback found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <FeedbackPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredFeedbacks.length}
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
        onToggleFeature={handleToggleFeature}
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
