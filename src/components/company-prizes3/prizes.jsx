import './styles.css';
import { company } from './data';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function YourComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
       <div data-aos="fade-up"  data-aos-duration="2000" className=" flex items-center justify-center bg-transparent relative" style={{ height: '10rem' }}>
        <div className="header absolute top-0 text-left" style={{ width: '80%' }}>
          <h2 className="header1">TIER-3</h2>
          <h2 className="header2">THE TRACK PRIZES</h2>
        </div>
      </div>
      <div  data-aos="fade-right"  data-aos-duration="2000" className="container">
        {company.map((company, index) => (
          <div className="card" style={{ '--clr': `#${index + 1}E${index + 2}7F` }} key={index}>
            <div className="img-box">
              <img src={company.img} alt={company.name} />
            </div>
            <div className="content">
              <h2>{company.name}</h2>
              <p>{company.info}</p>
              <a className="but" href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default YourComponent;
