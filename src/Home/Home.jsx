 // Home.js
import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero/hero";
import AboutSection from "../components/About/about";
import Faqs from "../components/Faq/faq";
import Footer from "../components/Footer/footer";
import Challenges from "../components/Challenges/Challenges";
import SpeakersNew from "../components/Speaker/speaker";
 
import Prize from "../components/Prizes/Prizes";
import Timeline from "../components/Timeline/Timeline";
import Organising_team from "../components/Organising_Team/Organising_team";
import Theme from "../components/Themes/Theme";
import Carousel from "../components/carousel/carousel";
import Why_sponser from "../components/why_sponser/Why_sponser";
import StarsCanvas from "../canvas/Star";
 
import Support from "../components/Support/support";
 
import MagicalLoader from "../components/Loader_P/Loader_P";
import Prizes_n from "../components/prizesnav/prizesmain/prize";
import Sponsers from "../components/sponsernav/main/main";
 
import Organizers from "../components/Organizers_slider/Organizers";

 import { magicbg,magicbg2 } from "../assets/images";
import BgStatic from "../components/Background/bgstatic";
import Explore from "../components/Tracks_new/Track";

function Home() {

  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
         <MagicalLoader/>
      ) : (
      <div>

          <div className="relative"> 
          <BgStatic/>  
          {/* <div className="fixed top-0 right-0 ">
          <a
        id="mlh-trust-badge"
        className="mlh"
        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          // style={{width:"30%", height:"50%"}}
          className="w-[3rem] h-[5rem] md:w-[8rem] mx-5 md:h-[10rem] md:mx-24"
        />
      </a> 
      </div>      */}
            <div className=""><StarsCanvas /></div>
            <Hero />
          </div>
          <div
  //      className="bg-fixed bg-no-repeat "
  //      style={{
  //   backgroundImage: `url(${magicbg})`,
  //  }}
 >

          <AboutSection />
      
          <Timeline />
          <Why_sponser />
          <Carousel />
          <Sponsers/>
          {/* <div className="hidden 2xl:flex">
          <Theme />
          </div> */}
          <div className=" block">
          <Explore/>
          </div>
          <Prizes_n/>
          <Challenges />
          <SpeakersNew />
          <Organising_team />
          {/* <Organizers /> */}
          {/* <Support /> */}
          <Faqs />
          <Footer />
        </div>
      </div>
      )}
    </>
  );
}

export default Home;
