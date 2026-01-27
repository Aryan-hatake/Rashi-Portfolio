import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from "gsap/SplitText";


const Project = () => {
  gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText);
   
const vid1  =  useRef()
const vid2  =  useRef()
const text  =  useRef()

  useGSAP(()=>{
    let tl = gsap.timeline()
    const split = new SplitText(text.current, {
    type: "chars"
  });
    tl.from(".project-cont",{
      opacity:0.2,
      y:-20,
      ease:"sine.in",
      scrollTrigger:{
        trigger:".project-cont",
        scroller:"body",
      
        start:"top 40%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(vid1.current,{
      opacity:0.5,
      ease:"sine.in",
      scrollTrigger:{
        trigger:".project-cont",
        scroller:"body",
    
        start:"5% 40%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(vid2.current,{
      opacity:0.5,
      ease:"sine.in",
      scrollTrigger:{
        trigger:".project-cont",
        scroller:"body",
   
        start:"10% 40%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(".Project .right",{
      opacity:0.5,
      x:40,
      scrollTrigger:{
        trigger:".Project",
        scroller:"body",
   
        start:"50% 50%",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.fromTo(split.chars, {
      color:"#443939",
     
     
    },{
      color:"rgb(170, 163, 163)",
       stagger: 0.8,
       ease: "sine.inOut",
       scrollTrigger: {
        trigger: ".Project",
        scroller: "body",
        start: " 40% 40%",
        end: "bottom bottom",
        scrub: 2
      }
    }
  
  )
  })

  return (


  <div id='Project' className="Project">
    <div className="left">
      <div className="project-cont">
        <h2>Project</h2>
        <div ref={vid1} className="vid-top">
          <video  playsInline preload='none' autoPlay loop muted src="/videos/2.webm"></video>
        </div>
        <div className="landscape">
          <img loading='lazy' src="/images/15.webp" alt="" />
        </div>
        <div ref={vid2} className="vid-bottom">
          <video  playsInline preload='none' autoPlay loop muted src="/videos/1.webm"></video>
        </div>
        <h2>01</h2>
      </div>

    </div>
    <div className="right">
      <div className="story">
        <video autoPlay preload='none' playsInline muted loop src="/videos/3.webm"></video>
      </div>
      <p ref={text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam facilis, ex veniam unde temporibus tempore sequi. Obcaecati aliquid accusamus culpa, ea rem magnam accusantium harum, odio blanditiis in ullam?</p>
    </div>
  </div>

  )
}

export default Project
