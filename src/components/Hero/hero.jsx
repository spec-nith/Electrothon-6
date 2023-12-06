import React from 'react';
import Timer from '../CountDown/countDown';
import StarsCanvas from '../../canvas/Star';

const Hero = () => {
  return (
    <>
   
    <div className="flex w-full h-1/2 z-[20] items-center justify-center min-h-screen bg-transparent relative">
      {/* Left Image */}
      <img
        src="left-image.jpg" // Replace with your actual left image source
        alt="Left Image"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50"
      />

      {/* Content Container */}
      <div className="absolute top-0 z-10 text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Centered Content</h1>
        <p className="text-lg text-gray-600">
          Your content goes here. Customize this text to suit your needs.
        </p>
        <div>
            <Timer/>
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
