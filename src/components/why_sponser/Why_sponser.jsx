import React from 'react'
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import { why_sponser } from '../../assets/images';
import Design_copmponent from './opacity';
import NumberCounter from './Number_Counter';

export default function Why_sponser() {
  return (
    <div className='text-white'>
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
              <div className="text-2xl lg:text-7xl font-extrabold text-white my-4 lg:my-6 font-[Oswald]">
              WHY SPONSOR OUR EUREKA?
               </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

<div className='grid grid-cols-1 sm:grid-cols-2  sm:mx-24 justify-center items-center'>
      <div className='w-1/2 justify-start'>
        <div className='ml-8 sm:ml-16'>content</div>
        <Design_copmponent />
         <div className='flex flex-row'>
           <NumberCounter number={50}/>
           <NumberCounter number={50}/>
           <NumberCounter number={50}/>
        </div>
      </div>
      <div className=' flex items-center justify-center'>
 <img 
 src={why_sponser}
alt="why_sponser"
   
/>
      </div>
      </div>
    </div>
  )
}
