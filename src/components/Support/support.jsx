import React from "react";
import "./style.css";
import data from "./data.js";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import { motion } from "framer-motion";

// export const staggerContainer = {
//   hidden: { opacity: 0, scale: 0.8 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       staggerChildren: 0.1,
//       duration: 0.5,
//     },
//   },
// };

export default function Support() {
  return (
    <div className="container">
      <Head />
      <Main />
    </div>
  );
}

function Head() {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
        <TitleText
          title={
            <>
              <div className="heading">WITH SUPPORT FROM</div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      {data.map((img) => (
        <Img img={img} key={img.id} />
      ))}
    </div>
  );
}
function Img({ img }) {
  return (
    <span className="images md:w-2/3">
      {<img src={img.url} alt={`Image is displayed}`} />}
    </span>
  );
}
