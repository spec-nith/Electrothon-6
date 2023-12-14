import './Home.css';
import React from 'react';
import Hero from '../Hero/hero';
import AboutSection from '../About/about';
import Faqs from '../Faq/faq';
import Footer from '../Footer/footer';
import Challenges from '../Challenges/Challenges';
import SpeakersNew from '../Speaker/speaker';
import Prizes from '../Prizes/Prizes';
import Prize from '../Prizes/Prizes';
 
import Timeline from '../Timeline/Timeline';

import Organising_team from '../Organising_Team/Organising_team';
import Theme from '../Themes/Theme';
 
import Carousel from '../carousel/carousel';
import Why_sponser from '../why_sponser/Why_sponser';
import StarsCanvas from '../../canvas/Star';
import Navbar from "../Navbar/Navbar"
 
 
import Disclaimer from '../Footer/Disclaimer';
 
 
function Home() {
  return (
   <>
    <div className="relative z-0 bg-primary">
      <div className="bg-black bg-cover 
      bg-no-repeat bg-center">
   <Navbar/>
   <div className='relative z-0'>
    <StarsCanvas/>
    <Hero/> 
    </div>
 
 
    <AboutSection/>
    <Prize/>
    <Timeline/>
    <Why_sponser/>
    <Theme/>
    <Organising_team/>
    <Carousel/>
 
    <Challenges/>
    <SpeakersNew/>
    <Faqs/>
    <Footer/> 
 
    <Disclaimer/>
 
    </div>
    </div>
    
   </>
  );
}

export default Home;
