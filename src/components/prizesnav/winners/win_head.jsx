import React, { useState, useEffect } from 'react';
import './style.css';
import { prizes2, sport } from '../../../assets/images';
 
import { motion } from "framer-motion";
import { TitleText } from "../../../components/Tracks_new/CustomTexts";
import { staggerContainer } from "../../../components/Tracks_new/motion";
import styles from "../../../components/Tracks_new/style";



function Prizes() {
   
  return (
    <>
      <div id="left-prize" className=" flex flex-col justify-center items-center w-full ">
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
                 PRIZES
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

        <div  className="flex flex-col  p-8  md:w-2/5 text-white   mt-16 md:mt-0">
          <img src={prizes2} alt="" />
          <div className='flex flex-row  items-center justify-between mx-12 sm:mx-12  lg:mx-20 xl:mx-24 2xl:mx-28'>
            <div>20K</div>
            <div>30K</div>
            <div>10K</div>
          </div>     
        </div>
      </div>
    </>
  );
}

export default Prizes;

