import React from 'react'
import { Element } from 'react-scroll'
import reactlogo from '../assets/react.svg'
import reduxlogo from '../assets/redux.svg'
import htmllogo from '../assets/html.png'
import jslogo from '../assets/JavaScript-logo.png'
import csslogo from '../assets/css-logo.svg'
import nodejslogo from '../assets/nodejs.svg'
import expresslogo from '../assets/express.png'
import mysqllogo from '../assets/mysql-icon.svg'
import mongodblogo from '../assets/mongodb-icon.svg'
import clogo from '../assets/c++.svg'
import vslogo from '../assets/Vslogo.png'
import githublogo from '../assets/GitHub-Mark.png'
const skills = () => {
  return (
   <Element name='skills' className='text-white min-h-screen px-30 py-1 bg-gradient-to-br from-[#000000] to-cyan-800 relative'>
   <div className='pt-25 sm:pt-10 sm:scale-90'>
      <h1 className='text-2xl sm:text-6xl text-center py-5 text-gray-300'>Skills</h1>
      <div className="skills py-5 flex gap-10 flex-wrap justify-center">
        <div className="one  sm:mx-8 px-2 py-3 sm:px-5 sm:py-7 min-w-[250px] max-h-[150px] sm:max-w-[450px] sm:max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-5 sm:gap-12 items-center  hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-lg sm:text-3xl'>Frontend</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
              <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1 '><img src={reactlogo} className='w-2 h-2 sm:w-4 sm:h-4' alt="" /> <p>React JS</p></div>
              <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={reduxlogo} className='w-2 h-2 sm:w-4 sm:h-4' alt="" /> <p>Redux</p></div>
              <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={htmllogo} className='w-2 h-2 sm:w-4 sm:h-4' alt="" /> <p>Html</p></div>
              <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={jslogo} className='w-2 h-2 sm:w-4 sm:h-4' alt="" /> <p>Java Script</p></div>
              <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={csslogo} className='w-2 h-2 sm:w-4 sm:h-4' alt="" /> <p>CSS</p></div>
          </div>
        </div>
        <div className="one  sm:mx-8 px-2 py-3 sm:px-5 sm:py-7 min-w-[250px] max-h-[150px] sm:max-w-[450px] sm:max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-5 sm:gap-12 items-center  hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-lg sm:text-3xl'>Backend</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
               <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={nodejslogo} className='w-4 h-4' alt="" /> <p>Node Js</p></div>
               <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={expresslogo} className='w-4 h-4' alt="" /> <p>express Js</p></div>
               <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={mysqllogo} className='w-4 h-4' alt="" /> <p>MySQL</p></div>
               <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={mongodblogo} className='w-4 h-4' alt="" /> <p>MongoDB</p></div>
          </div>
        </div>
        <div className="one  sm:mx-8 px-2 py-3 sm:px-5 sm:py-7 min-w-[250px] min-h-[100px] sm:min-w-[450px] sm:max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-5 sm:gap-12 items-center  hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-lg sm:text-3xl'>Programming Languages</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
 <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={jslogo} className='w-4 h-4' alt="" /> <p>Java Script</p></div>
 <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={clogo} className='w-4 h-4' alt="" /> <p>C/C++</p></div>
             
          </div>
        </div>
        <div className='hidden sm:block'>
        <div className=" one sm:mx-8 p-2 sm:px-5 sm:py-7 min-w-[250px] max-h-[150px] sm:min-w-[450px] sm:min-h-[240px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-5 sm:gap-12 items-center  hover:scale-105 transition-transform duration-300 ease-in-out ">
          <h1 className='text-lg sm:text-3xl'>Others</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
             <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={githublogo} className='w-4 h-4' alt="" /> <p>GitHub</p></div>
             <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={vslogo} className='w-4 h-4' alt="" /> <p>VS Code</p></div>
             <div className='border-1 border-gray-300 rounded-md sm:rounded-lg px-2 sm:px-4 sm:py-2 text-[10px] sm:text-base flex items-center gap-1'><img src={clogo} className='w-4 h-4' alt="" /> <p>Postman</p></div>     
          </div>
        </div>
        </div>
      </div>
</div>
   </Element>
  )
}

export default skills
