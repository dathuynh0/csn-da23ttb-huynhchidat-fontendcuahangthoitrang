import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  //lay so trang de hien thi
  const generatePage = () => {
    const page = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        page.push(i);
      }
    } else {
      if (currentPage < 3) {
        page.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        page.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        page.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return page;
  };

  const showPage = generatePage();

  return (
    <div className="flex items-center">
      <Button
        className="mr-1 md:mr-2 cursor-pointer"
        onClick={() => onPageChange(currentPage - 1)}
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* page */}
      {showPage.map((page, index) => {
        return page === "..." ? (
          <span key={`dots-${index}`} className="px-1 md:px-2 lg:px-4 py-2">
            ...
          </span>
        ) : (
          <Button
            size="icon"
            key={page}
            onClick={() => onPageChange(page)}
            className={
              currentPage === page
                ? "bg-black text-white m-1 md:px-2 lg:px-4 py-2 border rounded-lg transition cursor-pointer"
                : "m-1 md:px-2 lg:px-4 py-2 border rounded-lg cursor-pointer"
            }
          >
            {page}
          </Button>
        );
      })}

      <Button
        className="ml-1 md:ml-2 cursor-pointer"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        variant="outline"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export default Pagination;
