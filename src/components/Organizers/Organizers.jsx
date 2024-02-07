import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

import {
  organizersFinal,
  organizersThird,
  leadOrganizers,
} from "./OrganizersData";
import OrganizerCard from "./OrganizerCard";
import Leadorg from "../Organising_Team/Leadorg";

export default function Organisors() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    // removes default buttons
    arrows: true,
    // dots: true,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
  
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
              <div className="looked text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
                LEAD ORGANISERS
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
        <div className="flex   mt-8 px-4 sm:px-8 md:mx-32 lg:mx-24 justify-center items-center">
          <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16 justify-center items-center">
            { leadOrganizers.map((data, index) => (
              <Leadorg
                key={index}
                data={data}
                onCardClick={() => handleCardClick2(index)}
              />
            ))}
          </div>
        </div>
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
              <div className="looked text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 ">
               ORGANISERS
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="mx-auto max-w-[80vw]  text-white sm:p-4 ">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {organizersFinal.map((card, index) => (
            <OrganizerCard data={card} key={index} />
          ))}
        </Slider>
        <div className="mt-20">
          <Slider ref={setSliderRef} {...sliderSettings}>
            {organizersThird.map((card, index) => (
              <OrganizerCard data={card} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
