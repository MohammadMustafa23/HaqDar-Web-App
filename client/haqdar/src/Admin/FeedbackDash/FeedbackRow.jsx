import { Eye } from "lucide-react";

const slugify = (text = "") => text.toLowerCase().replace(/\s+/g, "-");

export default function FeedbackRow({ item, onView }) {
  const date = new Date(item.createdAt);

  return (
    <tr>
      <td>
        <div className="fm-user">
          <strong>{item.userId?.userName || "Unknown User"}</strong>

          <span>{item.userId?.email}</span>
        </div>
      </td>

      <td className="fm-subject">{item.subject}</td>

      <td>
        <span className={`fm-badge ${slugify(item.category)}`}>
          {item.category}
        </span>
      </td>

      <td>
        <div className="fm-date">
          <span>{date.toLocaleDateString()}</span>

          <small>
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
      </td>

      <td>
        <span className="fm-rating">⭐ {item.rating}/5</span>
      </td>

      <td>
        <span className={`fm-status ${slugify(item.status)}`}>
          {item.status}
        </span>
      </td>

      <td>
        <button
          className="fm-view-btn"
          onClick={() => onView(item)}
          aria-label="View Feedback"
        >
          <Eye size={18} />
        </button>
      </td>
    </tr>
  );
}
