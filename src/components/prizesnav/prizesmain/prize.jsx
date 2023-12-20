import "./style.css";
 
import React from "react";
import Hero from "../Hero2/hero";
import Carousel from "../../carousel/carousel";
import Headers from "../winners/win-head";
import Prizes1 from "../company-prizes1/prizes";
import Footer from "../../Footer/footer";
import Cards from "../cards/main";
import Navbar from "../../Navbar/Navbar";
function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
             <Navbar/>
            <Hero />
            <Headers />
            <Cards />
            <Carousel />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
