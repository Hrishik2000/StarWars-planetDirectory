import React from "react";

const ShimmerCard = () => {
  return (
    // Shimmer Card div
    <div className="h-64 w-56 m-6 bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="h-full w-full bg-gray-300"></div>
    </div>
  );
};

export default ShimmerCard;
