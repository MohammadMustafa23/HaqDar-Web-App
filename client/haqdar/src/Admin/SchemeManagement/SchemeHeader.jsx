import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SchemeHeader() {
  const navigate = useNavigate();

  return (
    <section className="scheme-header">
      <div className="scheme-header-left">
        <span className="scheme-badge">Scheme Administration</span>

        <h1 className="scheme-title">Scheme Management</h1>

        <p className="scheme-description">
          Search, edit and manage all active and draft government schemes from
          one centralized dashboard.
        </p>
      </div>

      <button className="add-btn" onClick={() => navigate("/add-scheme")}>
        <PlusCircle size={18} />
        Add New Scheme
      </button>
    </section>
  );
}
