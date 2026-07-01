import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function FeedbackPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("left");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("right");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="fm-pagination">
      <div className="fm-pagination-info">
        Showing <strong>{start}</strong>–<strong>{end}</strong> of{" "}
        <strong>{totalItems}</strong> entries
      </div>

      <div className="fm-pages">
        <button
          className="fm-page-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous Page"
        >
          <ChevronLeft size={18} />
        </button>

        {getPages().map((page, index) =>
          page === "left" || page === "right" ? (
            <span key={index} className="fm-page-dots">
              <MoreHorizontal size={16} />
            </span>
          ) : (
            <button
              key={page}
              className={`fm-page-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ),
        )}

        <button
          className="fm-page-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next Page"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
