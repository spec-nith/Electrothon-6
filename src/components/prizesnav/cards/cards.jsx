import React from "react";
import "./styleing.css";
const Card = ({ name, info, img }) => {
  return (
    <div className="card m-4">
      <div className="img-box">
        <img className="object-contain bg-no-repeat text-white" src={img} alt={name} />
      </div>
      <div className="content">
         
        <p>{info}</p>
        <a className="but" href="#">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
