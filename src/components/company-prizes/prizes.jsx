import React from 'react';
import './styles.css';

function YourComponent() {
  return (
    <>
      <div className="flex items-center justify-center bg-transparent relative" style={{ height: '10rem' }}>
        <div className="header absolute top-0 text-left" style={{ width: '80%' }}>
          <h2 className="header1">TIER-1</h2>
          <h2 className="header2">THE COMPANY SPONSOR PRIZES</h2>
        </div>
      </div>
      <div className="container">
        <div className="card" style={{ '--clr': '#009688' }}>
          <div className="img-box">
            <img src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Leafs" />
          </div>
          <div className="content">
            <h2>Leafs</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, hic? Magnam eum error saepe doloribus corrupti
              repellat quisquam alias doloremque!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="card" style={{ '--clr': '#FF3E7F' }}>
          <div className="img-box">
            <img src="https://i.postimg.cc/pdjRc68d/img-02.png" alt="Fruits" />
          </div>
          <div className="content">
            <h2>Fruits</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, hic? Magnam eum error saepe doloribus corrupti
              repellat quisquam alias doloremque!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="card" style={{ '--clr': '#03A9F4' }}>
          <div className="img-box">
            <img src="https://i.postimg.cc/wvDr345G/img-37.png" alt="Flowers" />
          </div>
          <div className="content">
            <h2>Flowers</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto, hic? Magnam eum error saepe doloribus corrupti
              repellat quisquam alias doloremque!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourComponent;
