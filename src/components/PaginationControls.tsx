// src/components/PaginationControls.tsx

"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newPage = direction === 'prev' ? currentPage - 1 : currentPage + 1;

    // Create a new URLSearchParams object from the current ones
    const newParams = new URLSearchParams(searchParams.toString());
    // Set the new page number
    newParams.set('page', newPage.toString());

    // Navigate to the new URL
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <div className="page-navigation" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px 0' }}>
      <button
        className="nav-button" // Re-using style from original HTML
        disabled={currentPage <= 1}
        onClick={() => handleNavigation('prev')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0061DF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage <= 1 ? 0.5 : 1
        }}
      >
        &larr; Previous
      </button>

      <span style={{ display: 'flex', alignItems: 'center' }}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="nav-button"
        disabled={currentPage >= totalPages}
        onClick={() => handleNavigation('next')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0061DF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage >= totalPages ? 0.5 : 1
        }}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default PaginationControls;