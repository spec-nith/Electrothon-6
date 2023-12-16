import React from 'react';
import InfoCardSection from './infocardsection';
import Carousel from '../../../components/carousel/carousel'
import './styleing.css';
const MainComponent = () => {
  const sectionsData = [
    {
      heading: 'TIER-1',
      content: 'THE COMPANY SPONSOR PRIZES',
      cardsData: [
    { name: 'Card 1', info: 'Description for Card 1', img: 'path/to/image1.jpg', order: 1 },
  { name: 'Card 2', info: 'Description for Card 2', img: 'path/to/image2.jpg', order: 2 },
  { name: 'Card 3', info: 'Description for Card 3', img: 'path/to/image3.jpg', order: 3 },
  { name: 'Card 4', info: 'Description for Card 4', img: 'path/to/image4.jpg', order: 4 },
  { name: 'Card 5', info: 'Description for Card 5', img: 'path/to/image5.jpg', order: 5 },
  { name: 'Card 6', info: 'Description for Card 6', img: 'path/to/image6.jpg', order: 6 },
  { name: 'Card 7', info: 'Description for Card 7', img: 'path/to/image7.jpg', order: 7 },
  { name: 'Card 8', info: 'Description for Card 8', img: 'path/to/image8.jpg', order: 8 },
 
      ],
    },
    
    {
      heading: 'TIER-2',
      content: 'SWAGS FOR ALL',
      cardsData: [
        { name: 'Card 1', info: 'Description for Card 1', img: 'path/to/image1.jpg', order: 1 },
        { name: 'Card 2', info: 'Description for Card 2', img: 'path/to/image2.jpg', order: 2 },
        { name: 'Card 3', info: 'Description for Card 3', img: 'path/to/image3.jpg', order: 3 },
        { name: 'Card 4', info: 'Description for Card 4', img: 'path/to/image4.jpg', order: 4 },
        { name: 'Card 5', info: 'Description for Card 5', img: 'path/to/image5.jpg', order: 5 },
        { name: 'Card 6', info: 'Description for Card 6', img: 'path/to/image6.jpg', order: 6 },
        { name: 'Card 7', info: 'Description for Card 7', img: 'path/to/image7.jpg', order: 7 },
        { name: 'Card 8', info: 'Description for Card 8', img: 'path/to/image8.jpg', order: 8 },
          ],
          
    },
    {
        heading: 'TIER-3',
        content: 'THE TRACK PRIZES',
        cardsData: [
          { name: 'Card 1', info: 'Description for Card 1', img: 'path/to/image1.jpg', order: 1 },
          { name: 'Card 2', info: 'Description for Card 2', img: 'path/to/image2.jpg', order: 2 },
          { name: 'Card 3', info: 'Description for Card 3', img: 'path/to/image3.jpg', order: 3 },
          { name: 'Card 4', info: 'Description for Card 4', img: 'path/to/image4.jpg', order: 4 },
          { name: 'Card 5', info: 'Description for Card 5', img: 'path/to/image5.jpg', order: 5 },
          { name: 'Card 6', info: 'Description for Card 6', img: 'path/to/image6.jpg', order: 6 },
          { name: 'Card 7', info: 'Description for Card 7', img: 'path/to/image7.jpg', order: 7 },
          { name: 'Card 8', info: 'Description for Card 8', img: 'path/to/image8.jpg', order: 8 },
            ],
            
      },
  ];
  return (
    <div className="container mx-auto p-8">
      {sectionsData.map((section, index) => (
        <InfoCardSection key={index} {...section} />
      ))}
    </div>
  );
};

export default MainComponent;
