import React from 'react';
import { video } from './assets/images';

export default function Video() {
  return (
    <div className='p-0 m-0 h-screen w-screen'>
      <video controls autoPlay className='object-cover w-full h-full'>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
