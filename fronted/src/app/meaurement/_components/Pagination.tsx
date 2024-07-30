'use client'

import { useState } from "react";
import { PaginationProps } from "@/types";
const Pagination: React.FC<PaginationProps> = ({ totalPages, setCurrentPage, currentPage }) => {

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                className={`px-4 py-2 mx-1 border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    className={`px-4 py-2 mx-1 border ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
                    onClick={() => handleClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className={`px-4 py-2 mx-1 border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination