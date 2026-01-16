import React from 'react'
import Cylinder from './Cylinder'
import { useMediaQuery } from 'react-responsive'

const Strength = () => {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1400px)' })

  return (
    <div className='Strength'>
     { !isSmallScreen && <div className="second-lg">
        <div className="imgCont">
          <img src="/images/4.jpeg" alt="" />
        </div>
        <div className="imgCont">
            <img src="/images/2.jpeg" alt="" />
        </div>
      </div>}

     { isSmallScreen && <div className="first">
        <h1>My Strength</h1>
        <h3></h3>

      </div>}

      {
        isSmallScreen &&
        <div className="second-sm">
          <Cylinder />
        </div>
      }
      <div className="third">
        {

           !isSmallScreen &&
          <div className="first">
            <h1>My Strength</h1>
            <h3></h3>

          </div>}
             <div className="cards">

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
    </div>
  )
}

export default Strength
