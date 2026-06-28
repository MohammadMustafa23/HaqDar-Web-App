import { ChevronLeft, ChevronRight } from "lucide-react";
export default function FeedbackPagination() {
  return (
    <div className="fm-pagination">
      <p>Showing 5 of 1,284 entries</p>

      <div className="fm-pages">
        <button>
          <ChevronLeft size={18} />
        </button>

        <button className="active">1</button>

        <button>2</button>

        <button>3</button>

        <button>...</button>

        <button>257</button>

        <button>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
