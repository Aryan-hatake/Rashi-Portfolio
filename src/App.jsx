import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import './style.css'
import About from './components/About'



const App = () => {
  return (
    <div className='Main'>
      <Nav/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
