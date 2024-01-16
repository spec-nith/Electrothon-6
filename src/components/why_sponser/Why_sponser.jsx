import React from "react";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import {
  why_sponser,
  why_sponserbg,
  whysponser1,
  whysponser2,
  whysponser3,
} from "../../assets/images";
import Design_copmponent from "./opacity";
import NumberCounter from "./Number_Counter";
import Graph from "./graph";
import "./why.css";

export default function Why_sponser() {
  const divStyle = {
    backgroundImage: `url(${why_sponserbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="text-white mt-24 min-h-screen sm:mx-12 md:mx-24 lg:mx-32 mb-8">
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
              <div className="eur text-2xl lg:text-7xl font-extrabold text-white my-4 lg:my-6 font-[Oswald]">
                WHY SPONSOR OUR MAGIC ?
              </div>
              <p
                className="flex justify-center md:text-xl
              text-base  sm:my-[-20px] font-light text-white my-4 lg:my-1 font-[Oswald]"
              >
                Unleash a digital wizardry storm within your brand! Sponsor
                Electrothon and watch innovation erupt like enchanted fireworks.
                Cast your name upon our spellbinding stage, captivating a
                targeted audience of pixel-wielding sorcerers and code-conjuring
                alchemists. Need market truths unraveled? Crowdsource solutions
                with our collective magic, brewing potent answers from hidden
                data. Expand your brand's enchanted ecosystem, forging bonds
                with our vibrant developer community that last long after the
                final Electrothon spell. <br />
                This isn't sponsorship, it's brand transmutation! Contact us
                today, and together, we'll write the next chapter in your
                company's epic saga.
              </p>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="flex  sm:flex-col-reverse  justify-center items-center mt-10  xs: flex-col-reverse ">
        <Graph />

        <div className="flex flex-row mt-12 items-center w-1/2 justify-center">
          <img src={why_sponser} alt="why_sponser" />
        </div>
      </div>
    </div>
  );
}
