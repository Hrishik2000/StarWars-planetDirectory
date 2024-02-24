import React from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";

const Body = () => {
  return (

    // main Body component
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="flex flex-col">
        <Header />
        <CardContainer />
      </div>
    </div>
  );
};

export default Body;
