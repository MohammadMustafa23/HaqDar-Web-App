import "./AdminDashComp.css";
import { Pencil, Trash2, FileText } from "lucide-react";

export default function SchemeRow({ scheme }) {
  return (
    <tr className="asr-row">
      <td>
        <div className="asr-name">
          <div className="asr-icon">
            <FileText size={20} strokeWidth={2} />
          </div>

          <span>{scheme.name}</span>
        </div>
      </td>

      <td>
        <span className="asr-category">{scheme.category}</span>
      </td>

      <td>
        <span
          className={`asr-status ${
            scheme.status === "Active" ? "asr-active" : "asr-draft"
          }`}
        >
          {scheme.status}
        </span>
      </td>

      <td>
        <div className="asr-actions">
          <button className="asr-edit">
            <Pencil size={17} />
          </button>

          <button className="asr-delete">
            <Trash2 size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
}
