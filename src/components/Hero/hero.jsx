import React from 'react';
import Timer from '../CountDown/countDown';
import SpellCanvas from '../../canvas/Spell';
import CrookCanvas from '../../canvas/Croo_k';

const Hero = () => {
  return (
    <>
   
    <div className="flex w-full h-full z-[20] items-center justify-center min-h-screen bg-transparent relative">
 {/* left */}
      <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50">
       <CrookCanvas/>
</div>

      {/* Content Container */}
      <div className=" absolute top-0 z-10 text-center  p-8  md:p-8 ">
        <h1 className="lg:text-7xl
        sm:text-5xl text-4xl  font-bold mb-4  text-white"><h5 className='lg:text-3xl
        sm:text-xl text-base font-semibold my-3 tracking-wide '>A CROSS COUNTRY HACKATHON</h5>
          ELECTROTHON <br/> <small className='lg:text-7xl
        sm:text-5xl text-4xl font-semibold' >
          RELEVELED
          </small>
        </h1>
        <p className="text-lg text-gray-400 ">
        Join electrothon relevel organised by spec NITH to create one of your <br/>
coolest project and netwerk with craxy minded people
        </p>
        <div>
            <Timer/>
        </div>
      </div>

  {/* right */}
<div className='hidden sm:block absolute top-0 right-0 h-full w-1/4'>
   <SpellCanvas/>
</div>
    </div>

    </>
  );
};

export default Hero;
