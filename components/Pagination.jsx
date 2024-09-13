"use client"; // This is a Client Component because it uses state or client-side behavior

import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage }) {
  const router = useRouter();

  // Function to handle page navigation
  const goToPage = (page) => {
    router.push(`/?page=${page}`);
  };

  return (
    <div className="pagination">
      <button 
        disabled={currentPage === 1} 
        onClick={() => goToPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>Page {currentPage}</span>

      <button onClick={() => goToPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}
