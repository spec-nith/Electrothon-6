import React from "react";
import "./style.css"; // Make sure to import your CSS file
import {
  devfoliop,
  orkes2,
  polygonp,
  replitp,
  hoverrobotix,
  taskade,
  wolfram,
  verbwire3,
} from "../../../assets/images";
import StarsCanvas from "../../../canvas/Star";

const ImageGallery = () => {
  const imageUrls = [
    {
      img: orkes2,
      alt: "ORKES LOGO",
    },
    {
      img: polygonp,
      alt: "POLYGON LOGO",
    },
    {
      img: devfoliop,
      alt: "DEVFOLIO LOGO",
    },
  ];
  const imageUrls2 = [
    {
      img: replitp,
      alt: "REPLIT LOGO",
    },
    {
      img: verbwire3,
      alt: "VERBWIRE LOGO",
    },
  ];
  const imageUrls3 = [
    {
      img: wolfram,
      alt: "WOLFRAM LOGO",
    },
    {
      img: taskade,
      alt: "TASKADE LOGO",
    },
    {
      img: hoverrobotix,
      alt: "HOVERROBOTIX LOGO",
    },
  ];

  return (
    <>
      <div className="containerlol ek">
        <div className="text-white flex justify-center text-4xl z-[999]">
          Oracle Sponsors
        </div>
        <div className="image">
          <ul className="image-gallery">
            {imageUrls.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlol do">
        <div className="text-white flex justify-center text-4xl p-5 z-[999]">
          Wizard Sponsors
        </div>
        <div className="image">
          <ul className="image-gallery">
            {imageUrls2.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlol tin">
        <div className="text-white flex justify-center text-4xl pb-5 align-middle z-[999]">
          Knight Sponsors
        </div>
        <div className="image">
          <ul className="image-gallery">
            {imageUrls3.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image imageurl3"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center sm:mt-20 text-center sm:text-xl pb-7 text-gray-100">
        Interested in sponsoring? Mail at:
        <br />
        <a href="mailto:spec@nith.ac.in" className="text-blue-500">
          {" "}
          spec@nith.ac.in
        </a>
      </div>
    </>
  );
};

export default ImageGallery;
