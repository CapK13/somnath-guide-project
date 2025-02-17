import React, { useState } from "react";
import exploreMedia from '../explore_media.json';

const ExploreSom = () => {

  return (
    <>

      <div className="h-auto w-full p-2 grid gap-2">
        <h1 className='text-center text-lg font-bold mb-2'>EXPLORE SOMNATH</h1>

        <div className="h-auto w-full bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg mb-4 text-center">
            Special buses operated by Somnath Tourism are the most affordable way to explore the entire area.
          </p>
          <p className="text-lg mb-4 text-center">
            Buses will be available at Bus stand
          </p>
          <div className="w-full flex justify-around items-center text-center text-gray-100">
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">10:30 AM</p>
              <p className="text-sm">Morning Bus</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">01:30 PM</p>
              <p className="text-sm">Afternoon Bus</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">04:00 PM</p>
              <p className="text-sm">Evening Bus</p>
            </div>
          </div>
        </div>
         <div className="explore_som_taxi h-[40vh] w-full bg-gray-800 p-3 rounded-lg gap-3 shadow-md overflow-x-auto flex">
            {
              exploreMedia.explore_somnath_taxis.map((exp,index) => (
                <div key={index} className="min-h-[200px] min-w-[300px] max-md:min-w-[250px] bg-gray-700 p-1 flex flex-col justify-around items-center py-4 px-3 rounded-md">
                    <img src={exp.img_src} className="h-1/2 w-full object-cover" alt="" />
                    <h1 className="font-bold"> {exp.taxi_rate} </h1>
                    <button className="p-2 rounded-md bg-green-700"> {exp.taxi_contact} </button>
                </div>
              ))
            }
         </div>
       
      </div>

    </>
  )
}

export default ExploreSom