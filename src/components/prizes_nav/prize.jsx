import './style.css';
import React from 'react';
 
 
import Headers from './winners/win-head';
import Prizes1 from './company-prizes/prizes';
import Navbar from '../Navbar/Navbar';
import Slider from '../carousel/carousel';
import Hero2 from '../Hero2/hero';
 
function Prizesnav() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className='relative z-0'>
            <Navbar/>
             <Hero2/>
            <Headers/>
              <Slider/>
             <Prizes1/>    
            {/* Other content or components can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Prizesnav;
