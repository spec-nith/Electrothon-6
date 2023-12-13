import './style.css';
import Header from '../components/Header/Header';
import React from 'react';
import Hero from '../components/Hero2/hero';
import Carousel from '../components/carousel/carousel'
import Headers from '../components/winners/win-head';
import Prizes1 from '../components/company-prizes1/prizes';
import Prizes2 from '../components/company-prizes2/prizes';

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className='relative z-0'>
            <Header />
            <Hero/>
            <Headers/>
            <Carousel/>
            <Prizes1/>  
            <Carousel/> 
            <Prizes2/>
            <Carousel/> 
            {/* Other content or components can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
