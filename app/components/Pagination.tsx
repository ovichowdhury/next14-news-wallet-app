import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className={`disabled:opacity-50 px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        className={`disabled:opacity-50 px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-200'
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
