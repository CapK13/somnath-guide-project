import React from "react";

const TrainBus = () => {
  return (
    <div className="bg-gray-900 text-white  w-full p-4 flex flex-col justify-start">
      <div className="p-4">
        <h1 className="text-xl md:text-2xl text-center font-semibold">
          Somnath Railway Station is currently under construction. Travelers must use Veraval Railway Station instead.
        </h1>
        <h2 className="text-lg md:text-xl text-center mt-2">
          Veraval is 8 km away from Somnath. The Somnath Bus Stand is near the parking area, which is also under construction.
        </h2>
      </div>

      <div className="h-[40vh] md:h-[22vh] w-full grid gap-4 p-4 md:grid-cols-2 md:grid-rows-1">
        <div className="bg-gray-800 p-4 flex flex-col justify-between items-center rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Book a Train Ticket</h1>
          <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer">
            <button className="h-12 w-40 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-200">
              Visit IRCTC
            </button>
          </a>
        </div>

        <div className="bg-gray-800 p-4 flex flex-col justify-between items-center rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Book a Bus Ticket</h1>
          <a href="https://www.gsrtc.in" target="_blank" rel="noopener noreferrer">
            <button className="h-12 w-40 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-200">
              Visit GSRTC
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainBus;
