import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API } from "../constants";
import Shimmer from "./Shimmer";


const CardContainer = () => {
  // declaring state
  const [FetchData, setFetchedData] = useState(null); // Set initial state to null
  const [currentPage, setCurrentPage] = useState(1);

  const FetchCards = async (currentPage) => {
    const ModifiedApi = API.replace("{}", currentPage);

    try {
      const data = await fetch(ModifiedApi);
      const json = await data.json();
      setFetchedData(json.results);
    } catch (error) {
      console.log(error);
    }
  };


  // use effect will call when current page changes
  useEffect(() => {
    FetchCards(currentPage);
  }, [currentPage]);


  //Pagination 
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Check if FetchData is null before rendering
  return FetchData === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap justify-center">
        {FetchData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={goToPreviousPage}
          className="text-white p-2 m-1  bg-slate-500 h-10 rounded-md"
        >
          Previous
        </button>

        <h1 className="text-white font-bold text-xl mt-2">{currentPage}/6</h1>
        <button
          onClick={goToNextPage}
          className="text-white p-2 m-1 bg-slate-500 h-10 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
