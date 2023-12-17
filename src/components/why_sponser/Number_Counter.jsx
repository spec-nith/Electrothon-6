 import React, { useEffect, useState } from 'react';
import { l_demo, whysponser2 } from '../../assets/images';

const NumberCounter = ({ number,data }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < number ? prevCount + 1 : prevCount));
    }, 1);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="flex flex-col sm:mx-auto justify-center items-center mt-10 text-white">
      <img src={whysponser2} alt='counter' className="mb-4 mx-auto" />

      <div className="text-4xl font-bold mb-2 md:ml-36 text-center md:text-left">
        {count}+
      </div>

      <div className="ml-4 text-center md:ml-36 font-extrabold">
        {data}
      </div>
    </div>
  );
};

export default NumberCounter;
