import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  const generatePages = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      return pages;
    }

    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    );

    return pages;
  };

  return (
    <div className="pagination">
      <p className="pagination-info">
        Showing{" "}
        <strong>
          {start}-{end}
        </strong>{" "}
        of <strong>{totalItems}</strong> schemes
      </p>

      <div className="pages">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={18} />
        </button>

        {generatePages().map((page, index) =>
          page === "..." ? (
            <span className="dots" key={index}>
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
