import React from 'react'

const Services = () => {
  return (
    <div className='Services '>
      <div className="top">
        <div className="vidT">
            <video autoPlay loop muted src="/public/videos/5.mp4"></video>
        </div>
        <div className="head">
            <h2>Services</h2>
            <h3>Price list</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="vidB">
            <video autoPlay loop muted src="/public/videos/4.mp4"></video>
        </div>
        <div className="serv-list">
            <div className="serv">
                <p>
                <span>Photo Content</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
            <div className="serv">
                <p>
                <span>Video Content</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
            <div className="serv">
                <p>
                <span>Social Media Mentions</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Services
