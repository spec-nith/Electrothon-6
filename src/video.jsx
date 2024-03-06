import React from 'react';
import { video } from './assets/images';

export default function Video() {
  return (
    <div className='h-screen w-screen'>
      <video controls autoPlay className='object-cover w-full h-full'>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
