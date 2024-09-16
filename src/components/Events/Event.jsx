import React from "react";
import { motion } from "framer-motion";
import styles from "../Tracks_new/style";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import "../Challenges/style.css";

import eventimage1 from "../../assets/images/eventimage1.jpg";
import eventimage2 from "../../assets/images/eventimage2.jpg";
import eventimage3 from "../../assets/images/eventimage3.jpg";
import eventimage5 from "../../assets/images/eventimage5.jpg";
import eventimage6 from "../../assets/images/eventimage6.jpg";
import eventimage7 from "../../assets/images/eventimage7.jpg";
import eventimage8 from "../../assets/images/eventimage8.jpg";
import eventimage9 from "../../assets/images/eventimage9.jpg";
import eventimage10 from "../../assets/images/eventimage10.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Event = () => {
 
  const sidebar = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="">
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
              <div className="looked text-4xl lg:text-7xl font-bold text-[#4a925d] my-2 lg:my-6 font-[Oswald]">
                Events
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <div className="bg-[#1a1a1d] rounded-xl bg-opacity-50 pt-10 pb-4 mx-auto max-w-[1200px] md:mx-auto">
        <Carousel responsive={sidebar}>
          <div className="p-4"> {}
            <img
              src={eventimage1}
              alt="Event 1"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage2}
              alt="Event 2"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage3}
              alt="Event 3"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage5}
              alt="Event 5"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage6}
              alt="Event 6"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage7}
              alt="Event 7"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage8}
              alt="Event 8"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage9}
              alt="Event 9"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="p-4"> {}
            <img
              src={eventimage10}
              alt="Event 10"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
