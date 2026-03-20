import React from "react";
import {  ChevronDown } from 'lucide-react';
import type { PaginationProps } from "../../types";



const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  

  return (
    <div className="flex items-center justify-between px-1 py-2 bg-white w-full h-full">
      {/* Left: Number of users with square border */}
      <div className="w-[76px] h-[46px] border border-[#A2A1A833] bg-white rounded-[10px] flex items-center px-2">
  <select
    value={itemsPerPage}
    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
    className="w-full h-full bg-transparent outline-none text-sm cursor-pointer"
  >
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={15}>15</option>
    <option value={20}>20</option>
  </select>
</div>
      
      {/* Center: Showing text */}
      <div className="text-sm text-[#A2A1A8]">
        Showing {startItem} to {endItem} out of {totalItems} records
      </div>
      
      {/* Right: Page navigation */}
      <div className="flex items-center justify-center gap-[5px]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-1.5 rounded-md ${currentPage === 1 ? 'text-[#A2A1A8] cursor-not-allowed' : 'text-[#A2A1A8] hover:bg-[#A2A1A833]'}`}
        >
          <img src="/images/direction-left.svg" alt="" className="w-[24px] h-[24px]" />
        </button>
        
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-[35px] h-[36px] flex items-center justify-center rounded-[8px] text-[14px] border ${
              currentPage === page
                ? 'bg-white text-[#7152F3] border-[#7152F3] text-[14px] font-[600]'
                : 'text-[#16151C] hover:bg-[#16151C33] text-[14px] font-[300] border-transparent'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-1.5 rounded-md ${
            currentPage === totalPages 
              ? 'text-[#A2A1A8] cursor-not-allowed' 
              : 'text-[#A2A1A8] hover:bg-[#A2A1A833]'
          }`}
        >
         <img src="/images/direction-right.svg" alt="" className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
