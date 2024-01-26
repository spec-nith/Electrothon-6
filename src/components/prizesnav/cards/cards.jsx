import React from "react";
import "./styleing.css";
const Card = ({ name, info, img }) => {
  return (
    <div className="card m-4">
      <div className="img-box">
        <img className="imges" src={img} alt={name} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{info}</p>
        <a className="but" href="#">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
