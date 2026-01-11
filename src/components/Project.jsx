import React from 'react'

const Project = () => {
  return (
    <div>
      <div className="Project">
        <div className="left">
         <div className="project-cont">
             <h2>Project</h2>
             <div className="vid-top">
               <video autoPlay loop muted src="/src/videos/2.mp4"></video>
             </div>
             <div className="landscape">
              <img src="/src/images/15.png" alt="" />
             </div>
             <div className="vid-bottom">
              <video autoPlay loop muted src="/src/videos/1.mp4"></video>
             </div>
             <h2>01</h2>
         </div>

        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Project
