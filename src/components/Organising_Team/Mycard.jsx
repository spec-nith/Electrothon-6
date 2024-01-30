import React from "react";
import "./Mycard.css";
import data from "../Support/data";
const Mycard = ({ img, name }) => {
  return (
    <div className="mycard">
      {/* Mycard No. {props.cardno}{" "} */}
      <div className="p-5">
        <picture className="w-full h-full">
          <img
            loading="lazy" //  lazy loading
            className="w-full object-cover"
            style={{ height: "300px", width: "250px" }}
            src={img}
            alt="organizerImg"
          />
        </picture>
     
      </div>
    </div>
  );
};

export default Mycard;
