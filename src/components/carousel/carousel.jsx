import React from 'react';
import './style.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div className="slide" key={index}>
          . ELECTROTHON 6.0
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
