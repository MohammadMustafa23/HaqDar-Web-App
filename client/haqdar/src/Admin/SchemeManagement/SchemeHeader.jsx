import { PlusCircle } from "lucide-react";

export default function SchemeHeader() {
  return (
    <div className="scheme-header">
      <div>
        <h1>Scheme Management</h1>

        <p>
          Search, edit and manage all active and draft government schemes from
          one central dashboard.
        </p>
      </div>

      <button className="add-btn">
        <PlusCircle size={18} />
        Add New Scheme
      </button>
    </div>
  );
}
