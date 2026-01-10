import React from 'react'
import Cylinder from './Cylinder'
const Strength = () => {
  return (
    <div className='Strength'>
      <div className="first">
        <h1>My Strength</h1>
        <h3></h3>
     
      </div>
      <div className="second-sm">
        <Cylinder/>
      </div>
      <div className="third">
        <div className="scard">
          <span className='tick'><i class="ri-check-fill"></i></span>
          <p>  <span className='head'>Adaptability:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex dolore voluptatum modi aliquam mollitia libero praesentium itaque labore numquam.</p>
        </div>
        <div className="scard">
          <span className='tick'><i class="ri-check-fill"></i></span>
          <p>  <span className='head'>Creative Storytelling:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex dolore voluptatum modi aliquam mollitia libero praesentium itaque labore numquam.</p>
        </div>
        <div className="scard">
          <span className='tick'><i class="ri-check-fill"></i></span>
          <p>  <span className='head'>Community:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex dolore voluptatum modi aliquam mollitia libero praesentium itaque labore numquam.</p>
        </div>
        <div className="scard">
          <span className='tick'><i class="ri-check-fill"></i></span>
          <p>  <span className='head'>Tech-Savvy:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex dolore voluptatum modi aliquam mollitia libero praesentium itaque labore numquam.</p>
        </div>
      </div>
    </div>
  )
}

export default Strength
