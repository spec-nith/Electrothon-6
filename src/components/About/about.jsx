import React from 'react';
import { chamkadar } from '../../assets/images';
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const AboutSection = () => {
  return (
    <div className="flex flex-col sm:flex-row  sm:items-start sm:mt-48 items-center min-h-[32rem] mx-4 lg:mx-24">

      {/* Content  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:mr-8`}
      >
        <TitleText
          title={
            <>
              <div className="flex justify-start text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                ABOUT US
              </div>
            </>
          }
          textStyles="text-center"
        />
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/*mobile view */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:hidden mt-8 w-3/4"
      >
        <img
          src={chamkadar}  
          alt="About Image"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Image on the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden sm:block ml-8"
        style={{ width: "35%" }}
      >
        <img
          src={chamkadar} // Replace with your actual image source
          alt="About Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
