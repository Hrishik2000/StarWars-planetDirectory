import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  const shimmerCount = 10;


  const shimmerArray = Array.from({ length: shimmerCount });

  return (
    <div>
      <div className="flex flex-wrap justify-center">

        {shimmerArray.map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
