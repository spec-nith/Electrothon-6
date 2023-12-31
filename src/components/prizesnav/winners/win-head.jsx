import React, { useState, useEffect } from 'react';
import './style.css';
import { sport } from '../../../assets/images';

function TopPrize({ position, prizeAmount }) {
  return (
    <div className="flex flex-row items-center w-full my-4 text-white">
      <span className={`flex items-center justify-center w-[5rem] h-[5rem] md:w-24 md:h-24 text-2xl font-semibold text-white ${position === 1 ? 'bg-gradient-to-r from-[#f4941d] to-[#ffd200]' : (position === 2 ? 'bg-gradient-to-r from-[#757f9a] to-[#d7dde8]' : 'bg-gradient-to-r from-[#232526] to-[#414344]')} rounded-full`}>
        {position}
      </span>
      <div className="flex flex-col items-start w-[9rem] ml-4 text-center md:ml-16 cursor-pointer">
        <span className="text-xl font-bold md:text-2xl ">
          &nbsp;{position === 1 ? 'First' : (position === 2 ? 'Second' : 'Third')} Prize
        </span>
      </div>
      <div className="flex flex-col items-start ml-4 text-center md:ml-16 cursor-pointer">
        <span className={`text-xl font-bold my-2 ${position === 1 ? 'text-yellow-400' : (position === 2 ? 'text-red-500' : 'text-blue-500')}`}>
          ₹ {prizeAmount} Cash Prize
        </span>
      </div>
    
    </div>
  );
}

function Winner() {
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
    <div className="lel flex items-center justify-center  bg-transparent relative" >
   <div className="header absolute top-0 text-center" style={{ width: '80%' }}>
        <h1 className="heads">OUR PRIZES</h1>
        <h1 className='define'>
          OUR CASH PRIZES
        </h1>
      </div>
    </div>
  );
}

function Prizes() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = useState("");

  function modalHandler(event) {
    const text =
      event.currentTarget.querySelector("span:first-child").textContent;
    setShowModal(true);
    if (text === "1st Prize")
      setModalData("₹ 30,000 Cash Prize + All Participants swags");
    else if (text === "2nd Prize")
      setModalData("₹ 20,000 Cash Prize + All Participants swags");
    else setModalData("₹ 15,000 Cash Prize + All Participants swags");
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/** Content */}
              <div className="relative flex flex-col w-full bg-[#1a1a1d] border-0 rounded-lg shadow-lg outline-none focus:outline-none text-white">
                {/** Header */}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="mr-10 text-3xl font-semibold">Coming Soon</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none opacity-50 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-white bg-transparent outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                
                {/** Body */}
                <div className="relative flex-auto p-6">
                  
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {modalData}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <Winner />
      <div id="left-prize" className=" lols flex flex-col w-full p-8 xl:w-3/5 mt-16 md:mt-0">
        <TopPrize position={1} prizeAmount={30000} />
        <TopPrize position={2} prizeAmount={20000} />
        <TopPrize position={3} prizeAmount={15000} />
        
        <div id="left-prize" className=" lols flex flex-col w-full p-8 xl:w-3/5 mt-16 md:mt-0">
          <img src={sport} alt="" />
        </div>
      </div>
    
    </>
  );
}

export default Prizes;
