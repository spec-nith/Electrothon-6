 // Header.js
import React from 'react';
import { headerimg } from '../../assets/images';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 bg-transparent p-4">
      <div className="flex flex-row container mx-auto">
        <h1 className="text-white font-bold text-xl ml-4 sm:text-2xl sm:flex sm:ml-48 ">ELECTROTHON<br/>RELEVELED</h1>
        <img
        className='flex ml-auto sm:mr-48'
        src={headerimg}
        alt="header-img"/>
      </div>
    </header>
  );
};

export default Header;
