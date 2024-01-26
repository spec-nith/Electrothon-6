import "./style.css";

import React from "react";
import Cards from "../../prizesnav/cards/main";
import Hero from "../../prizesnav/Hero2/hero";
import Carousel from "../../carousel/carousel";
import Heading from "../header/header";
import Footer from "../../Footer/footer";
import Sponser from "../oursponser/sponser";

import Sidebar from "../../Sidebar/Sidebar";
import LeftSidebar from "../../Left_sidebar/LeftSidebar";

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
