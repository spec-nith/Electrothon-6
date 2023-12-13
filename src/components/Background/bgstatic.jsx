 // bgstatic.js
import React from 'react';
import { bg3 } from '../../assets/images';

const BackgroundStatic = () => {
  return (
  <picture className='z-[-5] block '>
      <img className="object-cover w-screen h-[100vh]" src={bg3} alt="Background" />
      </picture>
  );
};

export default BackgroundStatic;
