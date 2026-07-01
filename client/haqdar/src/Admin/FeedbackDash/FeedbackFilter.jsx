import { Search, RotateCcw } from "lucide-react";

const categories = ["All", "General", "Technical", "Eligibility", "Suggestion"];
const statuses = ["All", "Unread", "Read"];

export default function FeedbackFilter({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "All",
      status: "All",
    });
  };

  return (
    <section className="fm-filter">
      <div className="fm-filter-left">
        <div className="fm-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by citizen or subject..."
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
          />
        </div>

        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={filters.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="fm-reset-btn" onClick={resetFilters}>
        <RotateCcw size={16} />
        Reset Filters
      </button>
    </section>
  );
}
