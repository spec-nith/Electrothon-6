import React from 'react';
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import './style.css';
import { PrizeIcon1, prizee } from '../../assets/images';
import { PrizeIcon2 } from '../../assets/images';
import { PrizeIcon3 } from '../../assets/images';




// const prizes = [
//   { id: 1, name: 'Prize 1', description: 'Description 1' },
//   { id: 2, name: 'Prize 2', description: 'Description 2' },
//   { id: 3, name: 'Prize 3', description: 'Description 3' },
// ];

const Prize = () => {
  return (
    <div className="container mx-auto my-8">
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
              <div className="flex justify-center">
               <img src ={prizee}/>
              </div>
              <div className="text-4xl lg:text-7xl font-bold text-[#DEECE4] my-3 lg:my-4 font-[Inter] ">
                PRIZES
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="prizes">
      <div className=" block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="second p-4 mx-5">
        <h1 className=" fip lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
          ₹15K
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">

          </p>
        </h1>
        <h5 className='sep lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>SECOND PRIZE</h5>
        <img src={PrizeIcon1} alt="" />
        </div>
        <div className=" first p-4 mx-5 mt-[-20px]">
        <h1 className="lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
          ₹20K
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">
  
          </p>
        </h1>
        <h5 className='thp lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>FIRST PRIZE</h5>
        <img src={PrizeIcon2} alt="" />
        </div>
        <div className=" third p-4 mx-5">
        <h1 className="lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
           ₹10K
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">
          
          </p>
        </h1>
        <h5 className='lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>THIRD PRIZE</h5>
        <img src={PrizeIcon3} alt="" />
        </div>
        
</div>

      </div>
    </div>
  );
};
// }

export default Prize;
