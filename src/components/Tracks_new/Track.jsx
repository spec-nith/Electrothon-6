"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { exploreWorlds, tabData } from "./data";
import { staggerContainer } from "./motion";
import { TitleText } from "./CustomTexts";
import ExploreCard from "./ExploreCard.jsx";
import styles from "./style";

const Explore = () => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <section className={`${styles.paddings}`} id="themes">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="looked text-4xl lg:text-7xl font-bold text-[#8471ae] tracking-wider my-4 lg:my-6 font-[Oswald]">
                Themes
              </div>
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-12 mb-20 sm:mb-8 xl:mx-24 2xl:mx-28 flex lg:flex-row flex-col min-h-[85vh] md:min-h-[50vh] gap-10 md:gap-8">
          {tabData.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={handleActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
