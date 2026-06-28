import { useState } from "react";
import { Eye } from "lucide-react";

import feedbackData from "../FeedbackDash/feedbackData.js";

import FeedbackPagination from "./FeedbackPagination";
import ViewFeedbackModal from "./ViewFeedbackModal";

export default function FeedbackTable() {
  const [selected, setSelected] = useState(null);

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
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {feedbackData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>{item.subject}</td>

                  <td>
                    <span className={`fm-badge ${item.category.toLowerCase()}`}>
                      {item.category}
                    </span>
                  </td>

                  <td>
                    {item.date}

                    <br />

                    <span className="fm-time">{item.time}</span>
                  </td>

                  <td>
                    <span
                      className={`fm-status ${item.status === "Unread" ? "unread" : "read"}`}
                    >
                      <span className="fm-dot" />

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

        <FeedbackPagination />
      </div>

      <ViewFeedbackModal
        open={selected}
        feedback={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
