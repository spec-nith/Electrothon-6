import React from 'react';
import './style.css'; 
const YourComponent = () => {
  return (
           <div className=" mb-36 sm:mb-64 lg:mb-80 flex items-center justify-center  bg-transparent relative">
          <div className="header absolute top-0 text-center" style={{ width: '80%' }}>
        <h1 className="heads">OUR SPONSORS</h1>
        <div className="flex justify-center mt-10 sm:mt-20 text-center text-sm sm:text-lg pb-7 text-gray-100">
    Ready to cast a spell of success. Mail us at:<br/>
<a href='mailto:spec@nith.ac.in' className='text-blue-500'> &nbsp; spec@nith.ac.in</a>
</div>
      </div>
    </div>
  );
};

export default YourComponent;
