import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { leftarrow, rightarrow, runshow1, runshow2, runshow3 } from "../../assets/images";

export default function Runshow() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="flex relative justify-center items-center lg:mt-16 object-contain">
      <div className="w-full px-4 sm:p-0 sm:w-1/2 mt-12 sm:mt-24">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img
              src={runshow1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={runshow2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={runshow3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
      
      {/* Position arrows at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 flex space-x-4 z-[99999999]">
        <button className="text-white focus:outline-none" onClick={handlePrev}>
          <img src={leftarrow} className="h-8 md:h-12 lg:h-16 xl:h-20" alt="Left Arrow" />
        </button>
        <button className="text-white focus:outline-none" onClick={handleNext}>
          <img src={rightarrow} className="h-8 md:h-12 lg:h-16 xl:h-20" alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
}
