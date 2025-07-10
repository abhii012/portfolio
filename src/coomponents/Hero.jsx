import React from 'react'
import { Element } from 'react-scroll'
import profilephoto from "../assets/profilephoto.png"
const Hero = () => {
  return (
    <Element name='home' className='min-h-screen py-25 bg-gradient-to-br from-[#000000] to-cyan-800'>
    <div className='text-white flex flex-col items-center gap-8 '>
      <img className='w-[240px] rounded-full' src={profilephoto} alt="" />
      <h1 className='text-6xl bold w-full sm:w-[60%] text-center'><span className='bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF] bg-clip-text text-transparent  animate-fade-in-down'>I'm Deepak,</span> frontend developer based in INDIA.</h1>
      <p className='w-full sm:w-[50%] text-center'>frontend developer with hands-on experience in HTML, CSS, JavaScript, React.js, and Tailwind CSS, with a focus on building responsive and user-friendly web applications.</p>
     <a target="_blank"  href="https://drive.google.com/file/d/1EtBks68Tmj6W9R7_NpLGF5ga0u6edZDb/view"> <button className='border-1 border-cyan-600 px-3 py-2 rounded-xl text-lg hover:border-cyan-300 transition-colors duration-300'>My resume</button></a>
    </div>
    </Element>
  )
}

export default Hero
