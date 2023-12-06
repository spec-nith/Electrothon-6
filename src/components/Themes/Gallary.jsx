 // src/components/Gallery.js
import React from 'react';
import { tabData } from './Tabs_Data';
import { l_demo, man_demo, phy_demo, phy_l_demo } from '../../assets/images';

const Gallery = ({ activeTab }) => {
  const filteredData = tabData[activeTab] || [];

  return (
    <div className="container w-full h-full mt-12 mb-12">
      {filteredData.map((data, index) => (
        <div key={index} className="mb-4 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1st div - Content */}
          <div className="flex flex-rows p-4">
            <img
              src={l_demo}
              alt={`Image 1`}
              className="w-1/2 h-1/2   object-contain"
              style={{ maxWidth: '33%', maxHeight: '33%' }}
            />
            <p className="text-white">{data.name}</p>
          </div>
          {/* 2nd div - Image */}
          <div className='flex justify-center items-center'>
            <img
              src={phy_l_demo}
              alt={`Image 1`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          {/* 3rd div - Image */}
          <div className='flex justify-center items-center'>
            <img
              src={phy_demo}
              alt={`Image 2`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          {/* 4th div - Text */}
          <div className="p-4 mt-4">
            <p className="text-white">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
