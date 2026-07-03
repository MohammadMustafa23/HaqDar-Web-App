import { useMemo } from "react";
import { Search } from "lucide-react";

export default function SchemeFilters({ schemes, filters, setFilters }) {
  const categories = useMemo(() => {
    return [
      "All Categories",
      ...new Set(schemes.map((scheme) => scheme.category)),
    ];
  }, [schemes]);

  return (
    <section className="filter-card">
      <div className="filter-grid">
        {/* Search */}
        <div className="filter-group">
          <label className="filter-label">Search Scheme</label>

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search by name, ID or keyword..."
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
            />
          </div>
        </div>

        {/* Category */}
        <div className="filter-group">
          <label className="filter-label">Category</label>

          <select
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="filter-group">
          <label className="filter-label">Status</label>

          <select
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                status: e.target.value,
              }))
            }
          >
            <option value="All Statuses">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>
    </section>
  );
}
