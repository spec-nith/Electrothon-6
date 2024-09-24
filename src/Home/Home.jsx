 // Home.js
import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero/hero";
import AboutSection from "../components/About/about";
import Faqs from "../components/Faq/faq";
import Footer from "../components/Footer/footer";
import Challenges from "../components/Challenges/Challenges";
import SpeakersNew from "../components/Speaker/speaker";
 
 
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
import Runshow from "../components/Runshow/Runshow";

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
            <div className="w-1/2 fixed z-[999]">
              <a
                id="mlh-trust-badge"
                className="fixed  top-0 right-0 xl:flex xl:justify-center xl:items-center  min-w-60px max-w-100px z-[99999999999]"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
                  alt="Major League Hacking 2024 Hackathon Season"
                  className="w-1/6 h-1/3 xl:h-full flex ml-auto mr-1 lg:mr-20 xl:mr-24 xl:w-1/4"
                />
              </a>
            </div>

            <Hero />
          </div>

          <AboutSection />
          {}
          <Event />

          <Timeline />
          <Runshow />
          <Why_sponser />
          <Carousel />
          <Sponsers />
          <Explore />
          <Prizes_n />
          <Challenges />
          <SpeakersNew />
          <Organisors />
          <Faqs />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
