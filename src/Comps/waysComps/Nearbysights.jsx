import React, { useState } from 'react'
import OldSomnath from './NearbyComps/OldSomnath';
import Somnath from './NearbyComps/Somnath';
import RamMandir from './NearbyComps/RamMandir';
import Triveni from './NearbyComps/Triveni';
import Musuem from './NearbyComps/Musuem';
import Geetamandir from './NearbyComps/Geetamandir';
import Bhalkatirth from './NearbyComps/Bhalkatirth';
import Baanganga from './NearbyComps/Baanganga';

const Nearbysights = () => {

  let [nearPlace, setNearPlace] = useState("Somnath");

  return (
    <>

      <div className="h-screen w-full bg-gradient-to-b from-blue-500 to-green-500 p-2 overflow-auto flex flex-col">
        
        <div className="h-auto w-full flex pb-5 overflow-x-auto gap-4 items-center lg:justify-center">
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Somnath")}
          >
            Somnath
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Old Somnath")}
          >
            Old Somnath
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Ram Mandir")}
          >
            Ram Mandir
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Triveni Sangam")}
          >
            Triveni Sangam
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Musuem")}
          >
            Musuem
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Geeta Mandir")}
          >
            Geeta Mandir
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Bhalka Tirth")}
          >
            Bhalka Tirth
          </div>
          <div
            className="pl_tabs flex items-center justify-center h-12 min-w-[120px] bg-gradient-to-r from-blue-900 to-teal-700 text-white font-semibold px-4 rounded-xl shadow-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            onClick={() => setNearPlace("Baan Ganga")}
          >
            Baan Ganga
          </div>
        </div>

        <div className="content_section overflow-auto pl_content h-auto w-full flex-1 p-2 bg-black text-white rounded-lg shadow-lg">
          {nearPlace == "Somnath" && <Somnath />}
          {nearPlace == "Old Somnath" && <OldSomnath />}
          {nearPlace == "Ram Mandir" && <RamMandir />}
          {nearPlace == "Triveni Sangam" && <Triveni />}
          {nearPlace == "Musuem" && <Musuem />}
          {nearPlace == "Geeta Mandir" && <Geetamandir />}
          {nearPlace == "Bhalka Tirth" && <Bhalkatirth />}
          {nearPlace == "Baan Ganga" && <Baanganga />}
        </div>
      </div>

    </>
  )
}

export default Nearbysights