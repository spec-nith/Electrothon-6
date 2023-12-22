 import React from "react";
import "./hero.css";
import Timer from "../CountDown/countDown";
import MagicCanvas from "../../canvas/Magic_stand";

import CrookCanvas from "../../canvas/Croo_k";
import SpellCanvas from "../../canvas/Spell";
import Sidebar from "../Sidebar/Sidebar";
import LeftSidebar from "../Left_sidebar/LeftSidebar";
 
 
 

const Hero = () => {
  return (
    <>
      <div className="flex w-full h-full z-[20] items-center justify-center min-h-screen bg-transparent relative">
       <LeftSidebar/>
      <Sidebar/>
        {/* left */}
        <div className="hidden sm:block absolute left-20 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50">
          <CrookCanvas/>
        </div>

        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8">
      <h1 className="head">ACROSS COUNTRY HACKATHON</h1>
        <h1 className="head2">ELECTROTHON RELEVELED</h1>
        <p className="text-lg text-gray-600">
        Join electrothon relevel organized by SPEC NITH to create one of your
coolest project and network with crazy-minded people
        </p>
         
            <Timer/>
       
        <div className="sm:hidden w-full flex flex-col justify-center items-center">
        <div style={{width:"70%"}}>
        <SpellCanvas/>
        </div>
        </div>
        
      </div>
 
        {/* right */}
        <div className="hidden sm:block absolute top-0 right-16 h-full w-1/4">
          <MagicCanvas />
        </div>
      </div>
    </>
  );
};

export default Hero;
