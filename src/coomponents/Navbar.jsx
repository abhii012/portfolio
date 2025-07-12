import React from 'react';
import { Link } from 'react-scroll';
import portfoliologo from '../assets/portfolio-logo.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-60 backdrop-blur-md py-4 px-6 w-full  border-0.5 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="text-2xl sm:text-3xl bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] bg-clip-text text-transparent font-bold">Deepak</div>
          <a href='https://github.com/abhii012' target='_blank' rel='noopener noreferrer' className="sm:hidden">
            <button className='ml-4 bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] px-3 py-1 rounded-xl text-sm hover:scale-105 transition-transform duration-300'>GitHub</button>
          </a>
        </div>
        <ul className='flex flex-wrap justify-center sm:justify-end gap-6 mt-4 sm:mt-0 list-none cursor-pointer text-sm sm:text-lg'>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          {/* <li><Link to='about' smooth={true} duration={500}>About Me</Link></li> */}
          <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li><Link to='contact' smooth={true} duration={500}>Contact Me</Link></li>
        </ul>
        <a href='https://github.com/abhii012' target='_blank' rel='noopener noreferrer' className="hidden sm:block">
          <button className='mt-4 sm:mt-0 bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] px-4 py-2 rounded-xl text-sm sm:text-base hover:scale-110 transition-transform duration-300'>GitHub</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
