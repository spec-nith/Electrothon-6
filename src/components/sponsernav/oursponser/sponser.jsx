import React from 'react';
import './style.css';
import { devfoliop, orkes, polygonp, replitp } from '../../../assets/images';

const ImageGallery = () => {
  const imageUrls = [
    {
      img: orkes ,
      alt:"ORKES LOGO"
    },
    {
    img: polygonp,
    alt:"POLYGON LOGO"
  },
    {
      img: devfoliop,
      alt:"DEVFOLIO LOGO"

    }
  ];
  const imageUrls2 = [
 {
   img: replitp,
   alt:"REPLIT LOGO"
 }
  ];
  const imageUrls3 = [
    {
      img: replitp,
      alt:"REPLIT LOGO"
    }
     ];

  return (
    <>
    <div className="container ">
    <div className='text-white flex justify-center text-4xl '>
              Oracle Sponsors
            </div>
    <div className="image">
      <ul className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
          <>
          <li className="list" key={index}>
            
            <img
              src={imageUrl.img}
              alt={imageUrl.alt}
              className="gallery-image"
            />
          </li>
          
          </>
          
        ))}
      </ul>
    </div>
    </div>
    <div className='text-white flex justify-center text-4xl p-5'>
              Wizard Sponsors
            </div>
    <div className="image">
      <ul className="image-gallery">
        {imageUrls2.map((imageUrl, index) => (
          <>
          <li className="list" key={index}>
          
            <img
              src={imageUrl.img}
              alt={imageUrl.alt}
              className="gallery-image"
            />
          </li>
          
          </>
          
        ))}
      </ul>
    </div>
    <div className='text-white flex justify-center text-4xl pb-5'>
              Knight Sponsors
            </div>
            <div className="image">
      <ul className="image-gallery">
        {imageUrls3.map((imageUrl, index) => (
          <>
          <li className="list" key={index}>
          
            <img
              src={imageUrl.img}
              alt={imageUrl.alt}
              className="gallery-image"
            />
          </li>
          
          </>
          
        ))}
      </ul>
    </div>
    <div className="flex justify-center text-center text-sm pb-7 text-[#6b7280]">
            Interested in sponsoring mail us at: <br/> spec@nith.ac.in
    </div>
    
    </>
  ); 
};

export default ImageGallery;
