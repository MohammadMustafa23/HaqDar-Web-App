import { Eye, Pencil, Trash2 } from "lucide-react";

export default function SchemeRow({ scheme }) {
  return (
    <tr>
      <td>
        <div className="scheme-info">
          <div className="scheme-icon">📄</div>

          <div>
            <h4>{scheme.name}</h4>

            <span>ID : {scheme.id}</span>
          </div>
        </div>
      </td>

      <td>
        <span className={`badge ${scheme.category.toLowerCase()}`}>
          {scheme.category}
        </span>
      </td>

      <td>{scheme.date}</td>

      <td>
        <span className={`status ${scheme.status.toLowerCase()}`}>
          ● {scheme.status}
        </span>
      </td>

      <td>
        <div className="actions">
          <Eye size={18} />

          <Pencil size={18} />

          <Trash2 size={18} />
        </div>
      </td>
    </tr>
  );
}
