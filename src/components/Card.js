import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {

  // Card section with data
  const navigate = useNavigate();
  const { name, climate, population, orbital_period, terrain, url } = data;
  //console.log(data);
  const terrainArray = terrain.split(", ");
  const extractedTerrain = terrainArray.slice(0, 1);
  
  return (
    <div className="h-64 w-56 rounded-xl border border-white m-3 mx-5 p-2   ">
      <h1 className="text-white p-2 mx-3  text-center text-2xl font-bold  ">
        {name}
      </h1>
      <h2 className="text-white">Planet Details</h2>
      <h1 className="text-white">Climate: {climate}</h1>
      <h1 className="text-white">Population:{population}</h1>
      <h1 className="text-white">Orbital_period:{orbital_period}</h1>
      <h1 className="text-white">Terrain: {extractedTerrain}</h1>

      <button
        onClick={() => {
          navigate(`/residents/?url=${url}`);
        }}
        className="text-white p-2 mx-14 mt-2 bg-slate-500 hover:bg-slate-700 transition ease-out duration-300 h-10 bottom-2 rounded-md"
      >
        Read More
      </button>
    </div>
  );
};

export default Card;
