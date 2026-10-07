import FoodCard from "../../../components/FoodCard/FoodCard";

import { useState } from "react";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Food Cards */}
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {Array.from({ length: totalPage }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-10 h-10 rounded-full border font-medium transition ${currentPage === pageNumber ? "bg-[#D1A054] text-white" : "bg-white text-gray-700 hover:bg-[#D1A054] hover:text-white"} `}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTab;
