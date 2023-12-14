import './style.css';
import React from 'react';
 
import Carousel from '../components/carousel/carousel'
import Headers from './winners/win-head';
import Prizes1 from './company-prizes/prizes';
import { Navbar } from '@material-tailwind/react';

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className='relative z-0'>
            <Navbar/>
            
            <Headers/>
            <Carousel/>
            <Prizes1/>    
            {/* Other content or components can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
