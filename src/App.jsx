import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import './style.css'
import About from './components/About'
import Strength from './components/Strength'



const App = () => {
  return (
    <div className='Main'>
      <Nav/>
      <Home/>
      <About/>
      <Strength/>
    </div>
  )
}

export default App
