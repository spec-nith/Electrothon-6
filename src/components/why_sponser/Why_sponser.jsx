import React from "react";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import { why_sponser, why_sponserbg } from "../../assets/images";
import Design_copmponent from "./opacity";
import NumberCounter from "./Number_Counter";
import "./why.css";

export default function Why_sponser() {
  const divStyle = {
    backgroundImage: `url(${why_sponserbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="text-white mt-24 min-h-screen" style={divStyle}>
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
              <div className=" eur text-2xl lg:text-7xl font-extrabold text-white my-4 lg:my-6 font-[Oswald]">
                WHY SPONSOR OUR EUREKA?
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-10">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="sm:ml-16 mt-8">content</div>
          <Design_copmponent />
          <div className="flex flex-row">
            <NumberCounter number={50} />
            <NumberCounter number={50} />
            <NumberCounter number={50} />
          </div>
        </div>
        <div className="flex flex-row mt-12 items-center w-1/2 justify-center">
          <img src={why_sponser} alt="why_sponser" />
        </div>
      </div>
    </div>
  );
}
