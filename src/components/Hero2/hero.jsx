import React from 'react';
import Button from '../button/button';
import './style.css';
const Hero = () => {
  return (
    <>
   
    <div className=" lol  flex w-full z-[20] items-center justify-center  bg-transparent relative" style={{ height: '35rem' }}>
      {/* Left Image */}
      <img
        src="left-image.jpg" 
        alt="Left Image"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50"
      />

      {/* Content Container */}
      <div className=" header absolute top-0 z-10 text-center p-8">
      <h1 className="head">A CROSS COUNTRY HACKATHON</h1>
        <h1 className="head2">ELECTROTHON RELEVELED</h1>
        <p className="text-lg text-gray-600">
          Join elctrothon relevel organsied by team SPEC NITH
        </p>
        <div>
            <Button/>
        </div>
      </div>

      {/* Right Image */}
      <img
        src="right-image.jpg" // Replace with your actual right image source
        alt="Right Image"
        className="absolute right-0 w-1/4 h-full object-cover opacity-50"
      />
    </div>
    </>
  );
};

export default Hero;
