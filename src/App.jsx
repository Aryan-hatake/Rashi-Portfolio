import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import './style.css'
import About from './components/About'
import Strength from './components/Strength'
import Project from './components/Project'



const App = () => {
  return (
    <div className='Main'>
      <Nav/>
      <Home/>
      <About/>
      <Strength/>
      <Project/>
    </div>
  )
}

export default App
