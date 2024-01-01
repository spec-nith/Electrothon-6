 

import React, { useState } from 'react';
import { Lead_Organizers, Members, organizers } from './team_data';
import { motion } from "framer-motion";
import FlippingCard from "./Single_Card"
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
 
 

const OrganisingTeam = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const [flippedCardIndex2, setFlippedCardIndex2] = useState(null);

  const handleCardClick2 = (index) => {
    setFlippedCardIndex2(index === flippedCardIndex2 ? null : index);
  };


  return (
    <>
      <div className='container mx-auto shadow-2xl rounded-lg overflow-hidden'>
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
                <div className="looked text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                  ORGANISING TEAM
                </div>
              </>
            }
            textStyles="text-center"
          />
        </motion.div>
        <div>
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
                <div className="looked text-2xl lg:text-5xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                   LEAD ORGANISORS
                </div>
              </>
            }
            textStyles="text-center"
          />
        </motion.div>
        <div className='flex justify-center mt-8 px-4 sm:px-8'>
          <div className='flex flex-col sm:flex-row sm:gap-8 md:gap-16'>
            {Lead_Organizers.map((data, index) => (
              <FlippingCard
                key={index}
                data={data}
                isFlipped={index === flippedCardIndex2}
                onCardClick={() => handleCardClick2(index)}
              />
            ))}
          </div>
        </div>
        </div>
        <div>
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
                <div className="looked text-2xl lg:text-5xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                    ORGANISORS
                </div>
              </>
            }
            textStyles="text-center"
          />
        </motion.div>
        </div>
        <div className='flex justify-center mt-8 px-4 sm:px-8 md:mx-32 lg:mx-24'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {organizers.map((data, index) => (
              <FlippingCard
                key={index}
                data={data}
                isFlipped={index === flippedCardIndex}
                onCardClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>

  
      </div>
    </>
  );
};
 

export default OrganisingTeam;


 
