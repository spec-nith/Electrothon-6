import React from "react";
import "./style.css";
const YourComponent = () => {
  return (
    <div className=" mb-16 sm:mb-24 lg:mb-24 flex items-center justify-center  bg-transparent relative">
      <div className="header text-center">
        <h1 className=" family heads">OUR SPONSORS</h1>
        <div className="  flex justify-center mt-10 sm:mt-20 text-center text-sm sm:text-lg pb-7 text-gray-100">
          Ready to cast a spell of success. Mail at:
          <br />
          <a href="mailto:spec@nith.ac.in" className="text-blue-500">
            {" "}
            &nbsp; spec@nith.ac.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
