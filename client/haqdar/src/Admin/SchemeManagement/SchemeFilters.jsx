import { Search } from "lucide-react";

export default function SchemeFilters() {
  return (
    <div className="filter-card">
      <div className="filter-grid">
        <div>
          <label>Search Scheme</label>

          <div className="search-box">
            <Search size={18} />

            <input type="text" placeholder="Search by name, ID or keyword..." />
          </div>
        </div>

        <div>
          <label>Category</label>

          <select>
            <option>All Categories</option>
            <option>Agriculture</option>
            <option>Education</option>
            <option>Housing</option>
            <option>Health</option>
          </select>
        </div>

        <div>
          <label>Status</label>

          <select>
            <option>All Statuses</option>
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>
      </div>
    </div>
  );
}
