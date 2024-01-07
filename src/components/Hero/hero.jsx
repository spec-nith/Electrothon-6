 import React, { useEffect } from "react";
import "./hero.css";
import Timer from "../CountDown/countDown";
 
import Button from "..//prizesnav/button/button";
 
import Sidebar from "../Sidebar/Sidebar";
import LeftSidebar from "../Left_sidebar/LeftSidebar";
 
import SpiritCanvas from "../../canvas/Spirit";
 
import PotionCanvas from "../../canvas/Potion";
 
 
 
 

const Hero = () => {

useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <>
      <div className="flex w-full h-full z-[20] items-center justify-center min-h-screen bg-transparent relative">
       <LeftSidebar/>
      <Sidebar/>
        {/* left */}
        <div className="hidden sm:block absolute left-20 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50">
             <SpiritCanvas/>
        </div>

        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8">
      
        <h1 className="head2">ELECTROTHON 6.O</h1>
        <p className="rakhu">
        Sorcerers of Cipher
        </p>
       
        <Button/>
        <div className=" text-white flex justify-center text-2xl lg:mb-[-45px] ">
      Hackathon Begins
      </div>
         
      <div className="mt-24 sm:mt-0">   
                <Timer/>   
            </div>
       
        <div className="sm:hidden w-full mt-10 flex flex-col justify-center items-center">
        <div style={{width:"70%"}}>
 
         </div>
        </div>
        
      </div>
 
        {/* right */}
        <div className="hidden sm:block absolute top-0 right-16 h-full w-1/4">
           <PotionCanvas/> 
        </div>
      </div>
    </>
  );
};

export default Hero;
