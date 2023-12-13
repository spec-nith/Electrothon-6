import React, { useState } from 'react';
import "../Organising_Team/card.css";
import { back_demo, bg3, headerimg, man_demo } from '../../assets/images';
import { bg } from 'date-fns/locale';

const FlippingCard = ({ data }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front p-4  flex flex-col">
          <picture className='h-3/4'>
            <img
            className='h-3/4 w-full'
             src={man_demo}
            alt="organizerImg" />
          </picture>
          <div className='absolute bottom-5 left-5 text-white'>
            <h2>{data.name}</h2>
            <p>{data.name}</p>
          </div>
        </div>
        <div className="back p-4 flex flex-col justify-between">
        <picture className='h-3/4'>
            <img
            className='h-3/4 w-full'
             src={back_demo}
            alt="organizerImg" />
          </picture>
                  </div>
      </div>
    </div>
  );
};

export default FlippingCard;
