import React from 'react'
import {Link }from 'react-scroll'
import portfoliologo from '../assets/portfolio-logo.png'


const Navbar = () => {
  return (
   
    <div className="sticky top-6 z-50 nav text-white flex items-center justify-around ">
        <div className="logo bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF] bg-clip-text text-transparent text-3xl">Deepak</div>
    <div className='font-outfit text-center  list-none flex gap-10 justify-center  cursor-pointer text-lg'>
      <li><Link to='home' smooth={true} duration={500}  isDynamic={true}  >Home</Link></li>
{/*       <li><Link to='about' smooth={true} duration={500}>About Me</Link></li> */}
      <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
      <li><Link to='contact' smooth={true} duration={500}>Contact Me</Link></li>
    </div>
    <a href='https://github.com/abhii012' target='_blank' ><button className='bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF] px-4  py-2 cursor-pointer rounded-xl  hover:scale-110 transition-transform duration-300'>GitHub</button></a>
    </div>
  
  )
}

export default Navbar
