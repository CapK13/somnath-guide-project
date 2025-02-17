import React from 'react';

const Expenses = () => {
  return (
    <div className="min-h-screen w-full p-4 bg-gray-900 text-gray-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-4 text-center px-10">
        Exploring Somnath isn’t expensive at all. The entire campus spans around 3 km.
      </h1>

      <div className="h-auto w-full bg-gray-800 p-4 rounded-lg shadow-md">
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
      <div className="h-auto mt-3 w-full bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg mb-6 text-center mt-2">
          Remember, not a single place within 3 km would cost more than ₹100 for two people.
        </h2>
        <h2 className='text-lg mb-6 text-center mt-2'> Places nearby wont cost much so you can bargain with taxi drivers if they take more than needed, although somnath trust had taken action, some still might try to take more money, so make sure you remember to tell them that you are prepared. &#129312; </h2>
      </div>
    </div>
  );
};

export default Expenses;
