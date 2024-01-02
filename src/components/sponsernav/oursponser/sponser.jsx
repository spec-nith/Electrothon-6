import React from 'react';
import './style.css';
import { devfoliop, orkes, orkes2, polygonp, replitp, verbwire, verbwire2, verbwire3 } from '../../../assets/images';

const ImageGallery = () => {
  const imageUrls = [
    {
      img: orkes2,
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
 },
 {
  img: verbwire3,
  alt:"VERBWIRE LOGO"
}
  ];
  const imageUrls3 = [
    // {
    //   img:  ,
    //   alt:" "
    // }
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
     <div className="flex justify-center text-center text-xl pb-7 text-gray-100">
    Interested in sponsoring? Mail us at: <br/>
<a href='mailto:spec@nith.ac.in'>spec@nith.ac.in</a>

     </div>
    
    </>
  ); 
};

export default ImageGallery;
