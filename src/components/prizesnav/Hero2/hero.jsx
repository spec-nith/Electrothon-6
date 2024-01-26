import React from "react";
import Button from "../button/button";
import "./style.css";
const Hero = () => {
  return (
    <>
      <div
        className=" lol  flex w-full z-[20] items-center justify-center  bg-transparent relative"
        style={{ height: "35rem" }}
      >
        {/* Content Container */}
        <div className=" header absolute top-0 z-10 text-center p-8">
          <h1 className="head">A CROSS COUNTRY HACKATHON</h1>

          <h1 className="head2">ELECTROTHON RELEVELED</h1>

          <p className="text-lg text-gray-600">
            Join elctrothon relevel organsied by team SPEC NITH
          </p>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
