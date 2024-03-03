import React from "react";
import { challengesData, challengesData2 } from "./challengesData";

import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "./style.css";
const Challenges = () => {
  return (
    <div className="">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
      >
        <TitleText
          title={
            <>
              <div className=" looked text-4xl lg:text-7xl font-bold my-4    lg:mb-20">
                Challenges
              </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>

      <section
        id="challenges"
        className="relative p-2 md:p-10 mx-auto w-100% md:w-[80%] mt-2 overflow-hidden bg-[#221e1e] bg-opacity-50 rounded-3xl"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="grid grid-cols-1  content-theme">
          {challengesData.map((challenge, index) => {
            return (
              <div
                className="flex md:flex-row flex-col justify-center items-center  md:m-4 mb-6 rounded-xl shadow-2xl p-4 text-white"
                key={challenge.key}
              >
                <div className="float-left p-5  w-3/4 mr-auto h-[140px] flex justify-center items-center ">
                  <picture>
                    <img
                      src={challenge.img}
                      className="w-full h-full object-cover"
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </div>
                <div className="ml-auto w-3/4">
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="px-3">
                      <ul className={challenge.list}>
                        {challenge.desc.map((element, index) => {
                          return (
                            <ul
                              className="md:pt-1 md:tracking-tighter text-[20px] "
                              key={index}
                            >
                              {element}
                            </ul>
                          );
                        })}
                      </ul>
                    </div>

                    {challenge.noButton ? (
                      ""
                    ) : (
                      <a
                        className=""
                        href={challenge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className=" lg:w-1/2  text-center p-2 mx-auto lg:mx-6 text-base border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 hover:border-gray-200 hover:text-black ">
                          More Details
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1  content-theme">
          {challengesData2.map((challenge, index) => {
            return (
              <div
                className="flex md:flex-row flex-col justify-center items-center  md:m-4 mb-6 rounded-xl shadow-2xl p-4 text-white"
                key={challenge.key}
              >
                <div className=" w-3/4 p-5 mr-auto flex justify-center items-center ">
                  <picture>
                    <img
                      src={challenge.img}
                      className="h-[12rem] sm:h-[17rem] object-contain"
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </div>
                <div className="ml-auto w-3/4">
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="px-3 text-[20px]">
                      <ul className={challenge.list}>
                        {challenge.desc.map((element, index) => {
                          return (
                            <ul
                              className="md:pt-1 md:tracking-tighter"
                              key={index}
                            >
                              {element}
                            </ul>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Challenges;
