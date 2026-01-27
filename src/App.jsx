import React from 'react'


const About = React.lazy(() => import('./components/About'))
const Home = React.lazy(() => import('./components/Home'))
const Nav= React.lazy(() => import('./components/Nav'))
const Strength = React.lazy(() => import('./components/Strength'))
const Project = React.lazy(() => import('./components/Project'))
const Services = React.lazy(() => import('./components/Services'))
const LetsWork = React.lazy(() => import('./components/LetsWork'))
import './style.css'



const App = () => {
 
  return (
    <div className='Main'>
      <Nav/>
      <Home/>
      <About/>
      <Strength/>  
      <Project/>
      <Services/>
      <LetsWork/>
    </div>
  )
}

export default App
