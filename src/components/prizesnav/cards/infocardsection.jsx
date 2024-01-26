import React from "react";
import Card from "./cards";
import Carousel from "../../../components/carousel/carousel";
import "./styleing.css";

const InfoCardSection = ({ heading, content, cardsData }) => {
  return (
    <div className="my-8">
      <Carousel />
      <h2 className="header1 flex justify-center">{heading}</h2>
      <p className="header2 flex justify-center">{content}</p>

      <div className="flex flex-wrap justify-center">
        <div className="text-white">Will Be Announced Soon</div>
        {/* {
         */}
      </div>
    </div>
  );
};

export default InfoCardSection;
