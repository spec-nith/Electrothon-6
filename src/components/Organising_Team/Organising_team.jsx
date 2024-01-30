import React, { useEffect, useState, useRef } from "react";
import { Lead_Organizers, organizers, organizerstwo } from "./team_data";
import FlippingCard from "./Single_Card";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import Leadorg from "./Leadorg";

const OrganisingTeam = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [flippedCardIndex2, setFlippedCardIndex2] = useState(null);
 

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const handleCardClick2 = (index) => {
    setFlippedCardIndex2(index === flippedCardIndex2 ? null : index);
  };

 
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
     
      {
        breakpoint: 1224,  
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 3,
        },
      }
 
    ],
  };
  
  

  return (
    <>
      <div className="    shadow-2xl rounded-lg overflow-hidden mx-3 sm:mx-28  ">
        {/* Lead Organisers */}
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="looked text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
                LEAD ORGANISORS
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
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
 
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="looked text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
              ORGANISORS
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
 
 <div className="ml-4 ">
        <Slider {...settings}>
        {organizers.map((data, index) => (
              <div
                key={index}
                className="card-wrapper"
           
              >
                <FlippingCard
                  data={data}
                  isFlipped={index === flippedCardIndex}
                  onCardClick={() => handleCardClick(index)}
                />
              </div>
            ))}
    </Slider>

        <div className="mt-4"></div>

       
   

        <Slider {...settings}>
        {organizerstwo.map((data, index) => (
              <div
                key={index}
                className="card-wrapper"
        
              >
                <FlippingCard
                  data={data}
                  isFlipped={index === flippedCardIndex2}
                  onCardClick={() => handleCardClick2(index)}
                />
              </div>
            ))}
    </Slider>

</div>
          
      
      </div>
      
    </>
  );
};

export default OrganisingTeam;
