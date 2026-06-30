import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SchemeHeader() {
  const navigate = useNavigate();
  return (
    <div className="scheme-header">
      <div>
        <h1>Scheme Management</h1>

        <p>
          Search, edit and manage all active and draft government schemes from
          one central dashboard.
        </p>
      </div>

      <button className="add-btn" onClick={()=>{navigate('/add-scheme')}}>
        <PlusCircle size={18} />
        Add New Scheme
      </button>
    </div>
  );
}
