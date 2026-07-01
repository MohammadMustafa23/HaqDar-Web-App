import { Eye, Pencil, Trash2 } from "lucide-react";

export default function SchemeRow({ scheme, onView, onEdit, onDelete }) {
  const formattedDate = new Date(scheme.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr>
      <td>
        <div className="scheme-info">
          <div className="scheme-icon">📄</div>

          <div>
            <h4>{scheme.name}</h4>

            <span>Scheme No: {scheme.no}</span>
          </div>
        </div>
      </td>

      <td>
        <span className={`badge ${scheme.category.toLowerCase()}`}>
          {scheme.category}
        </span>
      </td>

      <td>{formattedDate}</td>

      <td>
        <span className={`status ${scheme.status.toLowerCase()}`}>
          ● {scheme.status}
        </span>
      </td>

      <td>
        <div className="actions">
          <button
            className="action-btn view"
            onClick={() => onView(scheme)}
            title="View Scheme"
          >
            <Eye size={18} />
          </button>
          <button
            className="action-btn edit"
            onClick={() => onEdit(scheme)}
            title="Edit Scheme"
          >
            <Pencil size={18} />
          </button>

          <button
            className="action-btn delete"
            onClick={() => onDelete(scheme)}
            title="Delete Scheme"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
