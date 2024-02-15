import React from "react";
import "./style.css";
import {
  devfoliop,
  orkes,
  polygonp,
  replitp,
  hoverrobotix,
  taskade,
  wolfram,
  verbwire3,
  github,
  joget,
  gfg,
  cake,
  echo,
  blue,
  risein,
  risein2,
} from "../../../assets/images";

const ImageGallery = () => {
  const imageUrls0 = [
    {
      indx: 0,
      img: joget,
      alt: "REPLIT LOGO",
    },
  ];
  const imageUrls = [
    {
      img: github,
      alt: "GITHUB LOGO",
    },
    {
      img: orkes,
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
      indx: 0,
      img: replitp,
      alt: "REPLIT LOGO",
    },
    { indx: 1, img: verbwire3, alt: "VERBWIRE LOGO" },
    { indx: 2, img: gfg, alt: "GEEKSFORGEEKS LOGO" },
    { indx: 3, img: blue, alt: "BLUE LOGO" },
  ];
  const imageUrls3 = [
    {
      indx: 0,
      img: wolfram,
      alt: "WOLFRAM LOGO",
    },
    {
      indx: 1,
      img: taskade,
      alt: "TASKADE LOGO",
    },
    { indx: 2, img: hoverrobotix, alt: "HOVERROBOTIX LOGO" },
    { indx: 3, img: echo, alt: "ECHO 3D LOGO" },
    { indx: 4, img: cake, alt: "CAKE LOGO" },
  ];
  const imageUrls4 = [
    {
      indx: 0,
      img: risein2,
      alt: "RISEIN LOGO",
    },
  ];

  return (
    <>
      <div className="containerlolall zero yesss chill1">
        <div className="  text-white xs:px-10 xs:py-0 md:hidden pl-8 pr-8  pt-2 pb-2 bg-gradient-to-r from-violet-700 to to-orange-500 flex justify-center text-4xl z-[999] fnt cheems w-full md:mt-[-3rem] fk w-f ">
          Phoenix Sponsors
        </div>
        <div className=" family text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Phoenix Sponsors
        </div>
        <div className="image chill2">
          <ul className="image-gallery">
            {imageUrls0.map((imageUrl, index) => (
              <li
                className={`list pool ${imageUrl.indx === 0 ? "adjusted" : ""}`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[9] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall ek yesss chill1">
        <div className="  text-white xs:px-10 xs:py-0 md:hidden pl-8 pr-8  pt-2 pb-2 bg-gradient-to-r from-red-500 to-blue-600  flex justify-center text-4xl z-[999] fnt cheems w-full md:mt-[-3rem] fk ">
          Oracle Sponsors
        </div>
        <div className=" family text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Oracle Sponsors
        </div>
        <div className="image chill2">
          <ul className="image-gallery">
            {imageUrls.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[9] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall yesss do">
        <div className="  text-white md:hidden xs:px-10 xs:py-0 pl-8 pr-8  pt-2 pb-2 bg-gradient-to-r  from-blue-600 to-yellow-600 flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-5rem]  fk w-full">
          Wizard Sponsors
        </div>
        <div className="family  text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] lg:mt-[-5rem] fk ">
          Wizard Sponsors
        </div>
        <div className="image chill2 ">
          <ul className="image-gallery">
            {imageUrls2.map((imageUrl, index) => (
              <li
                className={`list ${imageUrl.indx === 2 ? "adjusted" : ""}`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[9] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall yesss tin ">
        <div className="  text-white md:hidden  px-8 xs:px-10 xs:py-0 pt-2 pb-2 bg-gradient-to-r from-blue-800 to-pink-500 flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] w-full fk ">
          Knight Sponsors
        </div>
        <div className=" family text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Knight Sponsors
        </div>
        <div className="image chill2 corr fem">
          <ul className="image-gallery">
            {imageUrls3.map((imageUrl, index) => (
              <li
                className={`list ${imageUrl.indx === 4 ? "adjusted" : ""} ${
                  imageUrl.indx === 3 ? "ssize" : ""
                }`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[9] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="containerlolall ek yesss chill1 mt-12">
        <div className="  text-white xs:px-10 xs:py-0 md:hidden pl-8 pr-8   bg-gradient-to-r from-red-500 to-blue-600  flex justify-center text-4xl z-[999] fnt cheems w-full md:mt-[-3rem] fk ">
          Education Partner
        </div>
        <div className=" family text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Education Partner
        </div>
        <div className="image chill2">
          <ul className="image-gallery">
            {imageUrls4.map((imageUrl, index) => (
              <li
                className={`list ${imageUrl.indx === 0 ? "adjusted" : ""}`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="risein z-[9] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center  sm:mt-20 text-center sm:text-xl pb-7 text-gray-100">
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
