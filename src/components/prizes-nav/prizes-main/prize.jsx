import './style.css';
import Header from '../../../components/Header/Header';
import React from 'react';
import Hero from '../Hero2/hero';
import Carousel from '../../../components/carousel/carousel'
import Headers from '../winners/win-head';
import Prizes1 from '../company-prizes1/prizes';
import Footer from '../../../components/Footer/footer';
import Cards from '../../../components/prizes-nav/cards/main';
function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className='relative z-0'>
            <Header />
            <Hero/>
            <Headers/>
            <Cards/>
            <Carousel/>
            <Footer/>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
