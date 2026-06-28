import { Search, Filter } from "lucide-react";

export default function FeedbackFilter() {
  return (
    <div className="fm-filter">

      {/* Left Side */}

      <div className="fm-filter-left">

        <div className="fm-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name or subject"
          />

        </div>

        <select>

          <option>General</option>

          <option>Technical</option>

          <option>Eligibility</option>

          <option>Suggestion</option>

        </select>

        <select>

          <option>Read</option>

          <option>Unread</option>

          <option>All</option>

        </select>

      </div>

      {/* Right Side */}

      <button className="fm-reset-btn">

        <Filter size={16} />

        Reset Filters

      </button>

    </div>
  );
}