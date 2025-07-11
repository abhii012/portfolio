import { useState } from 'react'
import './App.css'
import Navbar from './coomponents/Navbar'
import Hero from './coomponents/Hero'
import About from './coomponents/About'
import Skills from './coomponents/skills'
import ScrollToTop from './coomponents/Scrollpointer'
import Form from './coomponents/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-br from-[#000000] to-cyan-800'>
      <Navbar/>
      <Hero/>
      {/* <About/> */}
      <Skills/>
      <ScrollToTop/>
      <Form/>
    </div>
  )
}

export default App
