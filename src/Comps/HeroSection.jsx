import React from 'react';
import Hero_content from './hero_content.json';

const HeroSection = () => {
  return (
    <div className="hero_section h-screen w-full p-4 relative">
      <video
        className="video_section absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-75"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Hero_content[0].vid_src} type="video/mp4"/>
      </video> 
      <div className="content text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Welcome to the First Jyotirlinga
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-center">
          Wanna Explore Somnath ? 
        </p>
        <p className="mt-4 text-lg md:text-xl text-center">
          scroll down to find what you desire
        </p>
        
      </div>

    </div>
  );
};

export default HeroSection;
