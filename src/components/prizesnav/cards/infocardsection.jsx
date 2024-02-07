import React from 'react';
import Card from './cards';
import Carousel from '../../../components/carousel/carousel';
import './styleing.css';
import { motion } from "framer-motion";
import { TitleText } from "../../../components/Tracks_new/CustomTexts";
import { staggerContainer } from "../../../components/Tracks_new/motion";
import styles from "../../../components/Tracks_new/style";

const InfoCardSection = ({ heading, content, cardsData }) => {
  return (
    <div className="my-8">
      <Carousel /> {/* Include the Carousel component here */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
      >
        <TitleText
          title={
            <>
              <div className=" looked text-4xl lg:text-7xl font-bold my-4 tracking-wider lg:my-6  mb-16">
                Challenges
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center">
        {cardsData.map((company, index) => (
          <Card key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default InfoCardSection;