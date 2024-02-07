import React from "react";
import InfoCardSection from "./infocardsection";
import Carousel from "../../../components/carousel/carousel";
// import photo from '../../../assets/images/5ire.webpg.png'
import "./styleing.css";
import { gg, verbwire3 } from "../../../assets/images";
const MainComponent = () => {
  const sectionsData = [
    {
      heading: "TIER-1",
      content: "THE COMPANY SPONSOR PRIZES",
      cardsData: [
        {
          name: "VERBWIRE",
          info: "Most Innovative Use Of Verbwire API - Up to $5,000 in Premium API Credits, across up to 20 teams {$45 credit per team member}(2)  In addition to the above prizes we'd be willing to offer a one-month free Verbwire Starter Subscription to all participants of your event.",
 img:verbwire3,
           order: 1,
        }
      ],
    },
  ];
  return (
    <div className="containers mx-auto p-8">
      {sectionsData.map((section, index) => (
        <InfoCardSection key={index} {...section} />
      ))}
    </div>
  );
};

export default MainComponent;
