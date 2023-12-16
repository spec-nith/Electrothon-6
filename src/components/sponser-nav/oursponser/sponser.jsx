import React from 'react';
import './style.css'; // Import your CSS file

const ImageGallery = () => {
  return (
    <div className="image">
      <ul className="image-gallery">
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/1.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/2.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/3.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/4.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/5.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
        <li className='list'>
          <img
            src="http://tangledindesign.com/codepen/6.jpg"
            alt="Landscape"
            className="gallery-image"
          />
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
