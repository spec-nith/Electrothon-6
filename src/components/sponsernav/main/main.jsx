import "./style.css";
 
import React from "react";
 
import Heading from "../header/header";
 
import Sponser from "../oursponser/sponser";

 

function Sponsers() {
  return (
    <>
      <div className="relative bg-primary" id="sponsers_n">
        <div className=" ">
          <div className="relative ">
            <Heading />
            <Sponser />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsers;
