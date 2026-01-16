import React from 'react'

const Project = () => {
  return (
    <div>
      <div className="Project">
        <div className="left">
         <div className="project-cont">
             <h2>Project</h2>
             <div className="vid-top">
               <video autoPlay loop muted src="/public/videos/2.mp4"></video>
             </div>
             <div className="landscape">
              <img src="/public/images/15.png" alt="" />
             </div>
             <div className="vid-bottom">
              <video autoPlay loop muted src="/public/videos/1.mp4"></video>
             </div>
             <h2>01</h2>
         </div>

        </div>
        <div className="right">
          <div className="story">
          <video autoPlay muted  loop src="/public/videos/3.mp4"></video>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam facilis, ex veniam unde temporibus tempore sequi. Obcaecati aliquid accusamus culpa, ea rem magnam accusantium harum, odio blanditiis in ullam?</p>
        </div>
      </div>
    </div>
  )
}

export default Project
