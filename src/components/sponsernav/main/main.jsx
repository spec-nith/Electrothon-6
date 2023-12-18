import "./style.css";
import Header from "../../Header/Header";
import React from "react";
import Cards from "../../prizesnav/cards/main";
import Hero from "../../prizesnav/Hero2/hero";
import Carousel from "../../carousel/carousel";
import Heading from "../header/header";
import Footer from "../../footer/footer";
import Sponser from "../oursponser/sponser";
function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
            <Header />
            <Hero />
            <Heading />
            <Sponser />
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
