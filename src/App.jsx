import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork' 
import Contect from './components/Contect/Contect'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <MyWork/>
    <Contect/>
    </div>
  )
}

export default App
