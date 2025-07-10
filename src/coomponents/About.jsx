import React from 'react'
import { Element } from 'react-scroll'
import profilephoto from "../assets/profile_photo.png"
const About = () => {
  return (
     
     <Element name='about' className='py-20 bg-gradient-to-br from-[#000000] to-cyan-800'> 
    <div className='min-h-screen flex flex-col items-center text-white gap-20'>
          <h1 className='text-6xl'>About me</h1>
          <div className="about flex w-[80vw] gap-10">
                <img className='h-[50vh] rounded-lg' src={profilephoto} alt="" />
                <div className='text-lg '>
                <p >I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <br />
  <p> My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
     <div className="pecentage py-10">
            <span className='flex items-center gap-7 py-1 hover:scale-105 transition-transform duration-400'><p className='min-w-30'>HTML & CSS </p><hr className='w-[50%] outline-none border-none h-[8px] rounded-2xl bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF]'/> </span>
            <span className='flex items-center gap-7 py-1 hover:scale-105 transition-transform duration-400'><p className='min-w-30'>JavaScript </p><hr className='w-[60%] outline-none border-none h-[8px] rounded-2xl bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF]'/> </span>
            <span className='flex items-center gap-7 py-1 hover:scale-105 transition-transform duration-400'><p className='min-w-30'>React JS </p><hr className='w-[50%] outline-none border-none h-[8px] rounded-2xl bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF]'/> </span>
            <span className='flex items-center gap-7 py-1 hover:scale-105 transition-transform duration-400'><p className='min-w-30'>Next JS </p><hr className='w-[50%] outline-none border-none h-[8px] rounded-2xl bg-gradient-to-r from-[#2E3192]  to-[#1BFFFF]'/> </span>

      </div> 
       </div>
     
    </div>
    </div>
    </Element> 
  
  )
}

export default About
