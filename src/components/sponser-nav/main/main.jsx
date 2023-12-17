import './style.css';
import Header from '../../../components/Header/Header';
import React from 'react';
import Cards from '../../prizes-nav/cards/main';
import Hero from '../../prizes-nav/Hero2/hero';
import Carousel from '../../../components/carousel/carousel'
import Heading from '../header/header';
import Footer from '../../../components/footer/footer'
import Sponser from '../oursponser/sponser'
function App() {
    return (
      <>
        <div className="relative z-0 bg-primary">
          <div className="bg-black bg-cover bg-no-repeat bg-center">
            <div className='relative z-0'>
              <Header />
              <Hero/>
              <Heading/>
              <Sponser/>
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
  