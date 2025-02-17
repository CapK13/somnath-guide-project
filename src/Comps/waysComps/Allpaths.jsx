import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom';
import Nearbysights from './Nearbysights';
import History from './History';
import Vehicles from './Vehicles';
import Food from './Food';
import Photoshoots from './Photoshoots'
import Expenses from './Expenses'

const NavItem = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to}>
        {children}
      </NavLink>
    </div>
  )
}
  
const Lin = () => {
  return (
    <>
      <div className="h-full w-full  p-8 flex flex-col items-center overflow-auto">
        <h1 className="text-3xl text-white font-bold mb-6">Explore Options</h1>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavItem to="/">
            <p className="bg-blue-500 text-white py-4 px-8 text-center rounded-lg hover:bg-blue-600 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              Nearby Sights
            </p>
          </NavItem>
          <NavItem to="history">
            <p className="bg-gray-800 text-white py-4 px-8 text-center rounded-lg hover:bg-gray-900 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              History
            </p>
          </NavItem>
          <NavItem to="vehicles">
            <p className="bg-yellow-500 text-black py-4 px-8 text-center rounded-lg hover:bg-yellow-600 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              Vehicles & Travel
            </p>
          </NavItem>
          <NavItem to="food">
            <p className="bg-red-500 text-white py-4 px-8 text-center rounded-lg hover:bg-red-600 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              Food & Picnic
            </p>
          </NavItem>
          <NavItem to="photoshoots">
            <p className="bg-purple-500 text-white py-4 px-8 text-center rounded-lg hover:bg-purple-600 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              Photoshoots
            </p>
          </NavItem>
          <NavItem to="expenses">
            <p className="bg-green-500 text-white py-4 px-8 text-center rounded-lg hover:bg-green-600 hover:scale-105 shadow-md hover:shadow-xl transform transition-all">
              Expenses
            </p>
          </NavItem>
        </div>
      </div>


    </>
  )
}

const Allpaths = () => {
  return (
    <>
      
      <div className='h-[50vh] w-full bg-black p-2'>
          <Lin />
      </div>
      <div className="h-auto w-full bg-yellow-500">
        <Routes>  
          {/* <Route path="/" element={<Lin />}></Route> */}
          <Route path="/" element={<Nearbysights />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/photoshoots" element={<Photoshoots />}></Route>
          <Route path="/expenses" element={<Expenses />}></Route>
        </Routes> 
      </div>
    </>
  )
}

export default Allpaths