import React from 'react';
import Card from './cards';
import Carousel from '../../../components/carousel/carousel';
import './styleing.css';

const InfoCardSection = ({ heading, content, cardsData }) => {
  return (
    <div className="my-8">
      {/* <Carousel /> Include the Carousel component here */}
      <h2 className="header1">{heading}</h2>
      <p className="header2">{content}</p>

      <div className="flex flex-wrap justify-center">
        {cardsData.map((company, index) => (
          <Card key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default InfoCardSection;
