import React from "react";
import { bg3 } from "../../assets/images";

const BgStatic = () => {
  return (
    <picture className="block fixed z-[-5] opacity-[0.4]">
      
      <img
        className="object-cover w-screen h-[105vh]"
         src={bg3}
        alt="hero-bg"
      />
    </picture>
  );
};

export default BgStatic;
