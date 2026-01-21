import React from "react";
import EightDetails from "../EightDetails/EightDetails";

const Eightapp = ({ eightData }) => {
  console.log(eightData);
  return (
    <div>
      <div className="text-center mb-15 mt-15">
        <h1 className="font-bold text-4xl ">Trending Apps</h1>
        <p className="mt-5 text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className=" flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {eightData.map((singleData) => (
            <EightDetails
              key={singleData.id}
              singleData={singleData}
            ></EightDetails>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
          <button className="btn gardient">Show All</button>
      </div>
    </div>
  );
};

export default Eightapp;
