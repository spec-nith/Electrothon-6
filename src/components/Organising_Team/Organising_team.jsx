import React, { useEffect, useState, useRef } from "react";
import { Lead_Organizers, organizers, organizerstwo } from "./team_data";
import FlippingCard from "./Single_Card";
import { TitleText } from "../Tracks_new/CustomTexts";
import styles from "../Tracks_new/style";
import "./Imagecarousel.css";
import "./Mycard.css";
import Leadorg from "./Leadorg";

const OrganisingTeam = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [flippedCardIndex2, setFlippedCardIndex2] = useState(null);
  const [autoMove, setAutoMove] = useState(true);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const minCarouselWidth = 320;
  const carouselWidth = Math.min(1440, window.innerWidth - 40);
  const cardWidth = (carouselWidth - 20) / 3;
  const cardMargin = 10;

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const handleCardClick2 = (index) => {
    setFlippedCardIndex2(index === flippedCardIndex2 ? null : index);
  };

  const btnpressprev = (boxRef) => {
    if (boxRef.current) {
      let scrollLeft = boxRef.current.scrollLeft - carouselWidth / 5;
      if (scrollLeft < 0) {
        boxRef.current.scrollLeft = boxRef.current.scrollWidth - carouselWidth;
      } else {
        boxRef.current.scrollLeft = scrollLeft;
      }
    }
  };

  const btnpressnext = (boxRef) => {
    if (boxRef.current) {
      let scrollLeft = boxRef.current.scrollLeft + carouselWidth / 5;
      if (scrollLeft >= boxRef.current.scrollWidth - carouselWidth) {
        boxRef.current.scrollLeft = 0;
      } else {
        boxRef.current.scrollLeft = scrollLeft;
      }
    }
  };

  useEffect(() => {
    let intervalId;
    if (autoMove) {
      intervalId = setInterval(() => {
        btnpressnext(boxRef1);
        btnpressnext(boxRef2);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoMove]);

  return (
    <>
      <div className="container mx-auto shadow-2xl rounded-lg overflow-hidden">
        {/* Lead Organisers */}
        <div className="lead_organizers looked headingyo mt-10">
          LEAD ORGANIZERS
        </div>
        <div className="flex   mt-8 px-4 sm:px-8 md:mx-32 lg:mx-24 justify-center items-center">
          <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16 justify-center items-center">
            {Lead_Organizers.map((data, index) => (
              <Leadorg
                key={index}
                data={data}
                isFlipped={index === flippedCardIndex2}
                onCardClick={() => handleCardClick2(index)}
              />
            ))}
          </div>
        </div>
        {/* Organisers Carousel */}
 
        <div className="organizers looked headingyo ">ORGANIZERS</div>
        <div className="carousel-container ml-[8.25rem] mr-10 ">
          {/* <button className="pre-btn" onClick={() => btnpressprev(boxRef1)}>
            <p>&lt;</p>
          </button>
          <button className="next-btn" onClick={() => btnpressnext(boxRef1)}>
            <p>&gt;</p>
          </button> */}

          <div
            className="product-container"
            ref={boxRef1}
            style={{ width: carouselWidth + "px" }}
          >
            {organizers.map((data, index) => (
              <div
                key={index}
                className="card-wrapper"
                style={{
                  width: cardWidth + "px",
                  marginRight: cardMargin + "px",
                }}
              >
                <FlippingCard
                  data={data}
                  isFlipped={index === flippedCardIndex}
                  onCardClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
 
        <div className="mt-8"></div>

       
        <div className="carousel-container ml-[8.25rem] mr-10 ">
          {/* <button className="pre-btn" onClick={() => btnpressprev(boxRef2)}>
            <p>&lt;</p>
          </button>
          <button className="next-btn" onClick={() => btnpressnext(boxRef2)}>
            <p>&gt;</p>
          </button> */}
          <div
            className="product-container"
            ref={boxRef2}
            style={{ width: carouselWidth + "px" }}
          >
            {organizerstwo.map((data, index) => (
              <div
                key={index}
                className="card-wrapper"
                style={{
                  width: cardWidth + "px",
                  marginRight: cardMargin + "px",
                }}
              >
                <FlippingCard
                  data={data}
                  isFlipped={index === flippedCardIndex2}
                  onCardClick={() => handleCardClick2(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default OrganisingTeam;
