// Import React and the CSS file
import React from 'react';
import './style.css';

const ImageGallery = () => {
  const imageUrl = 'https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png'; // Use the same image URL for all images

  return (
    <div className="image">
      <ul className="image-gallery">
        {[...Array(9)].map((_, index) => (
          <li className="list" key={index}>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
