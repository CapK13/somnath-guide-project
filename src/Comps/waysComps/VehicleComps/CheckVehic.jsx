import React from "react";
import exploreMedia from "../explore_media.json";

const CheckVehic = () => {
  return (
    <div className="h-full w-full p-4 overflow-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scroll_no">
      {exploreMedia.go_home_services.map((tax, index) => (
        <div
          key={index}
          className="min-h-[300px] min-w-[250px] p-4 bg-gray-900 text-white flex flex-col justify-between items-center rounded-xl shadow-lg transition transform hover:scale-105"
        >
          <img
            src={tax.img}
            className="w-full h-2/3 object-cover rounded-lg"
            alt={tax.trave_agency_name}
          />
          <h1 className="text-xl font-semibold mt-3 text-center">
            {tax.trave_agency_name}
          </h1>
          <button className="mt-3 px-5 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg shadow-md transition duration-200">
            {tax.contact}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CheckVehic;
