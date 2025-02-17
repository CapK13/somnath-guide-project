import React, { useState } from 'react';
import ExploreSom from './VehicleComps/ExploreSom';
import CheckVehic from './VehicleComps/CheckVehic';
import TrainBus from './VehicleComps/TrainBus';

const Vehicles = () => {
  const [activeButton, setActiveButton] = useState("Explore Somnath");

  return (
    <>
      <div className="h-screen w-full bg-gray-900 p-4 flex flex-col justify-around ">
        <div className="ask_box h-20 w-full  rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          <button
            className={`h-12 w-full md:w-auto px-4 font-semibold rounded-lg shadow-lg transform transition-all duration-200 ${
              activeButton === "Explore Somnath" ? "bg-blue-500 text-white scale-105" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            onClick={() => setActiveButton("Explore Somnath")}
          >
            Explore Somnath
          </button>
          <button
            className={`h-12 w-full md:w-auto px-6 font-semibold rounded-lg shadow-lg transform transition-all duration-200 ${
              activeButton === "Check vehicles to go home" ? "bg-green-500 text-white scale-105" : "bg-green-600 hover:bg-green-700 text-white"
            }`}
            onClick={() => setActiveButton("Check vehicles to go home")}
          >
            Check vehicles to go home
          </button>
  
          <button
            className={`h-12 w-full md:w-auto px-4 font-semibold rounded-lg shadow-lg transform transition-all duration-200 ${
              activeButton === "Trains / Buses" ? "bg-red-500 text-white scale-105" : "bg-red-600 hover:bg-red-700 text-white"
            }`}
            onClick={() => setActiveButton("Trains / Buses")}
          >
            Trains / Buses
          </button>
        </div>

        <div className="h-[80vh] w-full bg-gray-800 rounded-lg grid p-2 max-md:h-[70vh] overflow-auto">
          <div className="h-full w-full overflow-auto">
            {activeButton === "Explore Somnath" && <ExploreSom />}
            {activeButton === "Check vehicles to go home" && <CheckVehic />}
            {activeButton === "Trains / Buses" && <TrainBus />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
