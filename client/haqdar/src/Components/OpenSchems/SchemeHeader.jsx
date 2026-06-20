import "./Open.css";
import { ArrowLeft } from "lucide-react";

export default function SchemeHeader({ onClose }) {
  return (
    <div className="scheme-header">
      <button className="back-btn" onClick={onClose}>
        <ArrowLeft size={20} />
        <span>Back to Schemes</span>
      </button>
    </div>
  );
}