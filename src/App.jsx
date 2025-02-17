import React, { useState } from 'react'
import HeroSection from './Comps/HeroSection'
import Navbar from './Comps/Navbar'
import Ways from './Comps/Ways';

const App = () => {

  return (
    <>    
        <div className="main_box h-auto w-full">
            <Navbar />
            <HeroSection />
            <Ways />
        </div>
    
    </>
  )
}




export default App