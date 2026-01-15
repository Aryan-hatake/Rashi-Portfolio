import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import './style.css'
import About from './components/About'
import Strength from './components/Strength'
import Project from './components/Project'
import Services from './components/Services'


const App = () => {
  return (
    <div className='Main'>
      <Nav/>
      <Home/>
      <About/>
      <Strength/>
      <Project/>
      <Services/>
    </div>
  )
}

export default App
