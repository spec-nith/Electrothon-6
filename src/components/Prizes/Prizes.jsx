import React from 'react';
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const prizes = [
  { id: 1, name: 'Prize 1', description: 'Description 1' },
  { id: 2, name: 'Prize 2', description: 'Description 2' },
  { id: 3, name: 'Prize 3', description: 'Description 3' },
 
];

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
              <div className="text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
               PRIZES
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {prizes.map((prize) => (
          <div key={prize.id} className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{prize.name}</h3>
            <p>{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prize;
