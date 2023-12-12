import './style.css';
import Header from '../components/Header/Header';
import React from 'react';
import Hero from '../components/Hero2/hero';
import button from '../components/button/button';
function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-black bg-cover bg-no-repeat bg-center">
          <div className='relative z-0'>
            <Header />
            <Hero/>
            {/* Other content or components can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
