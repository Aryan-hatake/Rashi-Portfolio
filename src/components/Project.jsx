import React from 'react'

const Project = () => {
  return (
    <div>
      <div className="Project">
        <div className="left">
         <div className="project-cont">
             <h2>Project</h2>
             <div className="vid-top">
               <video  playsInline preload='none' autoPlay loop muted src="/videos/2.webm"></video>
             </div>
             <div className="landscape">
              <img loading='lazy' src="/images/15.webp" alt="" />
             </div>
             <div className="vid-bottom">
              <video  playsInline preload='none' autoPlay loop muted src="/videos/1.webm"></video>
             </div>
             <h2>01</h2>
         </div>

        </div>
        <div className="right">
          <div className="story">
          <video autoPlay preload='none' playsInline muted  loop src="/videos/3.webm"></video>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam facilis, ex veniam unde temporibus tempore sequi. Obcaecati aliquid accusamus culpa, ea rem magnam accusantium harum, odio blanditiis in ullam?</p>
        </div>
      </div>
    </div>
  )
}

export default Project
