import React, { useEffect } from 'react';
import './style.css';

const Winner = () => {
  useEffect(() => {
    const defineText = document.querySelector('.define');

    const handleScroll = () => {
      const distanceFromTop = defineText.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (distanceFromTop < screenHeight) {
        defineText.classList.add('animated');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="lel flex items-center justify-center min-h-screen bg-transparent relative">
        <div className="header absolute top-0 text-center" style={{ width: '80%' }}>
          <h1 className="heads">OUR PRIZES</h1>
          <h1 className='define'>
            OUR CASH PRIZES
          </h1>
        </div>
      </div>
    </>
  );
};

export default Winner;
