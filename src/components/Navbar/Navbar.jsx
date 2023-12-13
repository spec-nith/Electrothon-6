import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { headerimg } from '../../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 relative w-full overflow-hidden">
   
      <div className="flex flex-row container mx-auto">
      <h1 className="text-white font-extrabold sm:font-bold text-md ml-4 sm:text-2xl sm:flex sm:ml-48 md:text-3xl lg:text-4xl xl:text-4xl">ELECTROTHON<br/>RELEVELED</h1>

<img
   className='flex ml-auto mr-8 h-[2rem] w-[6rem] sm:h-auto sm:w-64 lg:mr-48 md:w-[8rem] lg:w-64 xl:w-64'
   src={headerimg}
   alt="header-img"
/>     
   <button
          className="text-white  cursor-pointer h-1/3"
          onClick={toggleNavbar}
        >
       <AiOutlineMenu size={30}/>
        </button>
      
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed top-0 right-0 p-4">
              <button className="text-white" onClick={toggleNavbar}>
                <AiOutlineClose size={30} />
              </button>
            </div>
            <motion.div
              className="fixed inset-y-0 flex justify-center items-center bg-black bg-transparent p-4 w-3/4  "
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <ul className="text-white font-bold text-lg lg:text-6xl ">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-4 lg:mb-6"
                >
                  PRIZES
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-4 lg:mb-6"
                >
                  SPONSORS
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
