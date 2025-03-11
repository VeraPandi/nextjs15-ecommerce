import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
}

export default async function Pagination({
  currentPage,
  itemsPerPage,
}: PaginationProps) {
  const totalItems = await prisma.product.count();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesNumber: number[] = [];

  for (let i = 0; i < totalPages; i++) {
    const pageIndex = i + 1;
    pagesNumber.push(pageIndex);
  }

  return (
    <div className="mt-4 flex justify-center">
      {/* Display on mobile screen */}
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={"?page=" + (currentPage - 1)} className="btn join-item">
            «
          </Link>
        )}
        <button className="btn join-item pointer-events-none">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link href={"?page=" + (currentPage + 1)} className="btn join-item">
            »
          </Link>
        )}
      </div>

      {/* Display on tablet and desktop screen */}
      <div className="join hidden sm:block">
        {pagesNumber.map((page) => (
          <Link
            href={"?page=" + page}
            key={page}
            className={`btn join-item ${
              currentPage === page ? "btn-active pointer-events-none" : ""
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}
