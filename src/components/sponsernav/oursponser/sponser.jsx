import React from 'react';
import './style.css';

const ImageGallery = () => {
  const imageUrls = [{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qN8H-2dE6BN3B49lVwxiDUEo6n7D5RMLUgAgJ4XNQqoboDuak_aANPVdXcrMycia0bM&usqp=CAU',
    alt:"polygon"
  },
    {
      img:'https://assets.devfolio.co/company/89b098bdc57d448badcd5667ba31dcd7/assets/favicon.png',
      alt:"devfolio"

    }
  ];
  const imageUrls2 = [
 {
   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VxK63bFdBMhh2l-esu0X9JIA-yPQX2F4IfQD29aRw&s',
   alt:"replit"
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
            <div className="flex justify-center text-lg text-white pb-2">
            To Be Announced Soon
    </div>
    <div className="flex justify-center text-center text-sm pb-7 text-[#6b7280]">
            Interested in sponsoring mail us at: <br/> spec@nith.ac.in
    </div>
    
    </>
  ); 
};

export default ImageGallery;
