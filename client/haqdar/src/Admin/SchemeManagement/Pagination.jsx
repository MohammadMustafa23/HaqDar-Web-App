import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="pagination">
      <p>Showing 1-4 of 28 schemes</p>

      <div className="pages">
        <button>
          <ChevronLeft size={16} />
        </button>

        <button className="active">1</button>

        <button>2</button>

        <button>3</button>

        <button>...</button>

        <button>7</button>

        <button>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
