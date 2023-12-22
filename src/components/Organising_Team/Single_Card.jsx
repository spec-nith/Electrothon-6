 // FlippingCard.js

import React from 'react';
import "../Organising_Team/card.css";
import { back_demo, man_demo } from '../../assets/images';

const FlippingCard = ({ data, isFlipped, onCardClick }) => {
  const handleClick = () => {
    onCardClick();
  };

  return (
    <div className="card-container mb-16">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front p-4 flex flex-col">
          <picture className='h-3/4'>
            <img
                 className='h-3/4 w-full rounded-full'
              src={data.img}
              alt="organizerImg"
            />
          </picture>
          <div className='absolute bottom-5 left-5 text-white'>
            <h2>{data.name}</h2>
            <p>{data.post}</p>
          </div>
        </div>
        <div className="z-[-5] back p-4 flex flex-col justify-between">
          <picture className='h-3/4'>
            <img
              className='h-3/4 w-full'
              src={back_demo}
              alt="organizerImg"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
