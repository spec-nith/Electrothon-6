 import React from "react";
import "./hero.css";
import Timer from "../CountDown/countDown";
import MagicCanvas from "../../canvas/Magic_stand";
import Button from "..//prizesnav/button/button";
import CrookCanvas from "../../canvas/Croo_k";
import SpellCanvas from "../../canvas/Spell";
import SpiritCanvas from "../../canvas/Spirit";

const Hero = () => {
  return (
    <>
      <div className="flex w-full h-full z-[20] items-center justify-center min-h-screen bg-transparent relative">
        {/* left */}
        <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-50">
          <CrookCanvas/>
        </div>

        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8">
      
        <h1 className="head2">ELECTROTHON RELEVELED</h1>
        <p className="rakhu">
        Sorcerers of Cipher
        </p>
        <h1 className="headk">Applications Open</h1>
        <Button />
            <Timer className="buter"/>
       
        <div className="sm:hidden">
        <SpellCanvas/>
        </div>
      </div>

        {/* right */}
        <div className="hidden sm:block absolute top-0 right-0 h-full w-1/4">
          <MagicCanvas />
        </div>
      </div>
    </>
  );
};

export default Hero;
