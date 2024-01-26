import React from "react";
import "./style.css";

const Slider = () => {
  const items = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <div className="slider">
      <div className="slide-track">
        {items.map((index) => (
          <div className="slide" key={index}>
            . ELECTROTHON 6.0
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
