import React from 'react'
import { matrixText } from './Nav'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from "gsap/SplitText";

const Services = () => {
     
    gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText);

  const price  = useRef()
  const serv1  = useRef()
  const serv2  = useRef()
  const serv3  = useRef()

  useGSAP(()=>{
    let tl = gsap.timeline();

    tl.from(".vidT ",{
      opacity:0.2,
      ease:"power4.inOut",
      scrollTrigger:{
        trigger:".Services",
        markers:true,
        start:"top 50%",
        end:"bottom bottom",
        scrub:2
      }
    })

    tl.from(".vidB ",{
      opacity:0.2,
      ease:"power4.inOut",
      scrollTrigger:{
        trigger:".Services",
        markers:true,
        start:"top 50%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(".serv",{
       opacity:0.2,
       y:-30,
       stagger:0.4,
       ease:"power4.inOut",
       scrollTrigger:{
        trigger:".Services",
        markers:true,
        start:"top 50%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(".top .head",{
      opacity:0.2,
      x:30,
 
      scrollTrigger:{
        trigger:".Services",
        markers:true,
        start:"top top",
        end:"bottom bottom",
        scrub:2
      }
    })
  })
     

  return (
    <div className='Services '>
      <div className="top">
        <div className="vidT">
            <video playsInline preload='none' autoPlay loop muted src="/videos/5.webm"></video>
        </div>
        <div className="head">
            <h2>Services</h2>
            <h3 ref={price} onMouseEnter={()=>{matrixText(price)}} >Price list</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="vidB">
            <video playsInline preload='none' autoPlay loop muted src="/videos/4.webm"></video>
        </div>
        <div className="serv-list">
            <div className="serv">
                <p>
                <span ref={serv1} onMouseEnter={()=>{matrixText(serv1)}} >Photo Content</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
            <div className="serv">
                <p>
                <span ref={serv2}
                onMouseEnter={()=>{matrixText(serv2)}}  >Video Content</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
            <div className="serv">
                <p>
                <span ref={serv3} onMouseEnter={()=>{matrixText(serv3)}} >Social Media Mentions</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odio molestiae sapiente distinctio, quis tenetur eius rerum natus, eaque consectetur perferendis et sunt id aspernatur nulla quibusdam laborum minima.
                </p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Services
