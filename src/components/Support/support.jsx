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
    <div className="containerlol">
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
              <div className="headingyo">WITH SUPPORT FROM</div>
            </>
          }
        />
      </motion.div>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      {data.map((img) => (
        <Imga imglol={img} key={img.id} />
      ))}
    </div>
  );
}
function Imga({ imglol }) {
  return (
    <span className="imageslol">
      {<img className="imagesize" src={imglol.url} alt={`Image is displayed}`} />}
    </span>
  );
}
