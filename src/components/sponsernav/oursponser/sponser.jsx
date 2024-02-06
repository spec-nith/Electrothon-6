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
  github,
  gfg,
  cake,
  echo,
} from "../../../assets/images";

const ImageGallery = () => {
  const imageUrls = [
    {
      img: github,
      alt: "GITHUB LOGO",
    },
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
      indx: 0,
      img: replitp,
      alt: "REPLIT LOGO",
    },
    { indx: 1, img: verbwire3, alt: "VERBWIRE LOGO" },
    { indx: 2, img: gfg, alt: "GEEKSFORGEEKS LOGO" },
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

  return (
    <>
      <div className="containerlolall ek chill1">
        <div className="  text-white xs:px-2 xs:py-0 md:hidden pl-8 pr-8  pt-2 pb-2 bg-gradient-to-r from-blue-500 to-green-500 flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Oracle Sponsors
        </div>
        <div className="  text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Oracle Sponsors
        </div>
        <div className="image chill2">
          <ul className="image-gallery">
            {imageUrls.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[999] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall do">
        <div className="  text-white md:hidden xs:px-2 xs:py-0 pl-8 pr-8  pt-2 pb-2 bg-gradient-to-r from-blue-500  to-green-500 flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-5rem]  fk  ">
          Wizard Sponsors
        </div>
        <div className="  text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] lg:mt-[-5rem] fk ">
          Wizard Sponsors
        </div>
        <div className="image  corr">
          <ul className="image-gallery">
            {imageUrls2.map((imageUrl, index) => (
              <li
                className={`list ${imageUrl.indx === 2 ? "adjusted" : ""}`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-999"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall tin ">
        <div className="  text-white md:hidden  px-8 xs:px-2 xs:py-0 pt-2 pb-2 bg-gradient-to-r from-blue-500 to-green-500 flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Knight Sponsors
        </div>
        <div className="  text-white hidden md:flex justify-center text-4xl z-[999] fnt cheems  md:mt-[-3rem] fk ">
          Knight Sponsors
        </div>
        <div className="image corr fem">
          <ul className="image-gallery">
            {imageUrls3.map((imageUrl, index) => (
              <li
                className={`list ${imageUrl.indx === 4 ? "adjusted" : ""}`}
                key={index}
              >
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image imageurl3 z-999"
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
