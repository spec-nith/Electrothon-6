import React from "react";
import "./about.css";
import { chamkadar } from "../../assets/images";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const AboutSection = () => {
  return (
    <div className="flex flex-col sm:flex-row  sm:items-start sm:mt-48 items-center min-h-[32rem] mx-4 lg:mx-36">
      {/* Content  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:mr-8 `}
      >
        <TitleText
          title={
            <>
              <div className="family  looked flex justify-start text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
                ABOUT US
              </div>
            </>
          }
          textStyles="text-center"
        />
        <p className="  width-836px about-description text-lg text-white">
          Let your magical harry potter mind come in role. It's an
          inherently unpredictable ride. As we launch the 6th in-person spell of
          Electrothon, we strive for nothing less than the wizard. Run by the
          student community SPEC under the moonlight of NIT Hamirpur,
          Electrothon has impacted over 5000 students.
          <div className="hidden sm:flex">
            {" "}
            The budding hackers who joined Electrothon over its previous
            iterations left no stone unturned to ideate and amalgamate
            technologies that transfigure visions into reality.
          </div>
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
          className=" cham self-center  w-full h-auto object-cover"
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
          className=" cham w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
