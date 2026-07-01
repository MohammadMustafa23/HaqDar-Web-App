import { Eye, Pencil, Trash2, FileText } from "lucide-react";

export default function SchemeRow({ scheme, onView, onEdit, onDelete }) {
  const formattedDate = new Date(scheme.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr className="scheme-row">
      <td>
        <div className="scheme-info">
          <div className="scheme-icon">
            <FileText size={18} />
          </div>

          <div className="scheme-content">
            <h4>{scheme.name}</h4>

            <span>Scheme No. {scheme.no}</span>
          </div>
        </div>
      </td>

      <td>
        <span className="scheme-category">{scheme.category}</span>
      </td>

      <td className="scheme-date">{formattedDate}</td>

      <td>
        <span
          className={`scheme-status ${
            scheme.status === "Active" ? "status-active" : "status-draft"
          }`}
        >
          {scheme.status}
        </span>
      </td>

      <td>
        <div className="scheme-actions">
          <button
            className="action-btn view"
            onClick={() => onView(scheme)}
            title="View"
          >
            <Eye size={18} />
          </button>

          <button
            className="action-btn edit"
            onClick={() => onEdit(scheme)}
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            className="action-btn delete"
            onClick={() => onDelete(scheme)}
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
