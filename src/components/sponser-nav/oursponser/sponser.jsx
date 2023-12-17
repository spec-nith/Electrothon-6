import React from 'react';
import './style.css';

const ImageGallery = () => {
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qN8H-2dE6BN3B49lVwxiDUEo6n7D5RMLUgAgJ4XNQqoboDuak_aANPVdXcrMycia0bM&usqp=CAU',
    'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9VxK63bFdBMhh2l-esu0X9JIA-yPQX2F4IfQD29aRw&s',
   'https://assets.devfolio.co/company/89b098bdc57d448badcd5667ba31dcd7/assets/favicon.png',
   'data:image/png;base64,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',
   'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
    'https://assets-global.website-files.com/6217c768b8b19637dc690fd8/6339a8eb2bb4de01bddb6b85_Group%2062.png',
    'https://assets.devfolio.co/company/89b098bdc57d448badcd5667ba31dcd7/assets/favicon.png'
  ];

  return (
    <div className="image">
      <ul className="image-gallery">
        {imageUrls.map((imageUrl, index) => (
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
