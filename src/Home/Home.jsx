 // Home.js
import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero/hero";
import AboutSection from "../components/About/about";
import Faqs from "../components/Faq/faq";
import Footer from "../components/Footer/footer";
import Challenges from "../components/Challenges/Challenges";
import SpeakersNew from "../components/Speaker/speaker";
import DesiTimline from "../components/Desitimeline/desihead";
 
import Timeline from "../components/Timeline/Timeline";
import Organising_team from "../components/Organising_Team/Organising_team";
 
import Carousel from "../components/carousel/carousel";
import Why_sponser from "../components/why_sponser/Why_sponser";
import StarsCanvas from "../canvas/Star";

 

import MagicalLoader from "../components/Loader_P/Loader_P";
import Prizes_n from "../components/prizesnav/prizesmain/prize";
import Sponsers from "../components/sponsernav/main/main";
 
import BgStatic from "../components/Background/bgstatic";
import Explore from "../components/Tracks_new/Track";
import { Event } from "../components/Events/Event";
import Organisors from "../components/Organizers/Organizers";

function Home() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {!Loading ? (
        <MagicalLoader />
      ) : (
        <div>
          <div className="relative">
            <BgStatic />
         
            <div className="">
              <StarsCanvas />
            </div>
            <Hero />
          </div>
     
            <AboutSection />

            <Timeline />
            <DesiTimline/> 
            <Why_sponser />
            <Carousel />
            <Sponsers />
            <Event />
         
              <Explore />
            
            <Prizes_n />
            <Challenges/>
            <SpeakersNew />
            <Organisors/>
            <Faqs />
            <Footer />
          
        </div>
      )}
    </>
  );
}

export default Home;
