import React from "react";
import { bg3, magicbg, magicbg2, magicbg3 } from "../../assets/images";

const BgStatic = () => {
  return (
    <picture className="block fixed z-[-5] opacity-[0.4]">
      <img
        className="object-cover w-full h-[105vh]"
        src={magicbg3}
        alt="hero-bg"
      />
    </picture>
  );
};

export default BgStatic;
