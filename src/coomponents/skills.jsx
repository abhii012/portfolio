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
   <div className='pt-10'>
      <h1 className='text-6xl text-center py-5 text-gray-300'>Skills</h1>
      <div className="skills py-5 flex gap-10 flex-wrap justify-center">
        <div className="one mx-8 max-w-[450px] max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-12 items-center px-5 py-7 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-3xl'>Frontend</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
              <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={reactlogo} className='w-4 h-4' alt="" /> <p>React JS</p></div>
              <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={reduxlogo} className='w-4 h-4' alt="" /> <p>Redux</p></div>
              <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={htmllogo} className='w-4 h-4' alt="" /> <p>Html</p></div>
              <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={jslogo} className='w-4 h-4' alt="" /> <p>Java Script</p></div>
              <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={csslogo} className='w-4 h-4' alt="" /> <p>CSS</p></div>
          </div>
        </div>
        <div className="one mx-8  max-w-[450px] max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-10 items-center px-5 py-7 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-3xl'>Backend</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
               <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={nodejslogo} className='w-4 h-4' alt="" /> <p>Node Js</p></div>
               <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={expresslogo} className='w-4 h-4' alt="" /> <p>express Js</p></div>
               <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={mysqllogo} className='w-4 h-4' alt="" /> <p>MySQL</p></div>
               <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={mongodblogo} className='w-4 h-4' alt="" /> <p>MongoDB</p></div>
          </div>
        </div>
        <div className="one mx-8  min-w-[450px] max-h-[260px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-10 items-center px-5 py-7 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-3xl'>Programming Languages</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
 <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={jslogo} className='w-4 h-4' alt="" /> <p>Java Script</p></div>
 <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={clogo} className='w-4 h-4' alt="" /> <p>C/C++</p></div>
             
          </div>
        </div>
        <div className="one mx-8  min-w-[450px] min-h-[240px] border-1 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]

  rounded-lg flex flex-col gap-10 items-center px-5 py-7 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className='text-3xl'>Others</h1>
          <div className="tech flex flex-wrap gap-5 justify-center">
             <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={githublogo} className='w-4 h-4' alt="" /> <p>GitHub</p></div>
             <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={vslogo} className='w-4 h-4' alt="" /> <p>VS Code</p></div>
             <div className='border-1 border-gray-300 rounded-lg px-4 py-2 flex items-center gap-1'><img src={clogo} className='w-4 h-4' alt="" /> <p>Postman</p></div>     
          </div>
        </div>
      </div>
</div>
   </Element>
  )
}

export default skills
