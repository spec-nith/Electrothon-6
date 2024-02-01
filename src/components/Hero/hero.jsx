import React, { useEffect } from "react";
import "./hero.css";
import Timer from "../CountDown/countDown";

 

import Sidebar from "../Sidebar/Sidebar";
import LeftSidebar from "../Left_sidebar/LeftSidebar";
import Navbar from "../Navbar/Navbar";
 

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
  
      <div className="flex flex-col w-full  z-[20] items-center justify-center min-h-[40rem] bg-transparent relative">
      <Navbar />
        <LeftSidebar />
        <Sidebar />
     
        <div className=" flex flex-col gap-4 absolute top-0 z-10 text-center pt-8   sm:ml-0">
          <h1 className="head3">ELECTROTHON 6.O</h1>
          <p className="rakhu">Sorcerers of Cipher</p>


         
         
          <div className="mt-24 sm:mt- ">
            <Timer />
          </div>

      
        </div>
 
      </div>
    </>
  );
};

export default Hero;
