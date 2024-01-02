import "./style.css";
 
import React from "react";
 
import Headers from "../winners/win_head";
 
import Cards from "../cards/main";
 
function Prizes_n() {
  return (
    <>
      <div className="relative z-0 bg-primary" id="prizes_n">
        <div className=" ">
          <div className="relative z-0 ">
            <Headers />
            {/* <Cards /> */}
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Prizes_n;
