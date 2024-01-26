import "./style.css";
import React, { useState } from "react";
import Gallery from "./Gallary";
import Tabs from "./Tab";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

function Theme() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto mt-8">
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
              <div className="looke flex justify-center mx-24 text-3xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                THEMES
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <Gallery activeTab={activeTab} />
    </div>
  );
}

export default Theme;
