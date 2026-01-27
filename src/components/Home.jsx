import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { matrixText } from './Nav'

export   const imgMove =  (element,e)=>{
     console.log(element)
         gsap.to(element.current,{
           scale:1.4,
           x:e.clientX/10,
           y:e.clientY/10,
           objectPosition:"right",
            duration: 2,
           ease:"power4.out"
         })
 
}
export   const imgDefault =  (element)=>{
      
         gsap.to(element.current,{
           scale:1,
           x:0,
           y:0,
           objectPosition:"center",
            duration: 2,
           ease:"power4.out"
         })
 
}
const Home = () => {

   gsap.registerPlugin(useGSAP);
   gsap.registerPlugin(ScrollTrigger)
   
   const HeroImg = useRef()

   const asthana  = useRef()
   const para  = useRef()


   useGSAP(()=>{
    //  let tl = gsap.timeline({
    //   scrollTrigger:{
    //      trigger:".Home",
    //      scroller:"body",
  
    //      start:"-10% top",
    //      end:"bottom bottom",
            // scrub:2
    //  }})
     let tl = gsap.timeline();

     tl.from(".left",{
            
            opacity:0.2,
            duration:0.8,
            ease:"sine.inOut"
     })
     tl.from(".name h1",{
            
            opacity:0.2,
            x:-10,
            duration:0.8,
            ease:"sine.inOut"
     })
     tl.from(".name h3",{
            
            opacity:0.2,
            x:10,
            duration:0.8,
            ease:"sine.inOut"
     })
     tl.from(".center",{
            
            width:0,
            duration:0.8,
            ease:"sine.inOut"
     })
     tl.to(para.current,{
            
            opacity:1,
            
            duration:0.4,
            ease:"sine.inOut"
     })
     tl.from("button",{
            
            opacity:0,
            
            duration:0.4,
            ease:"sine.inOut"
     })
   })


  return (
    <div className="Home-Cont">

    <div className='Home'>
     <div className="left">
      <img ref={HeroImg} onMouseMove={(e)=>{imgMove(HeroImg,e)}} onMouseLeave={()=>{imgDefault(HeroImg)}} src="./images/14.webp"  alt="" />
     </div>
     <div className="right">
      <div className="top">
        <div className="name">
          <h1>Rashi Asthana</h1>
          <h3 ref={asthana} onMouseEnter={()=>{matrixText(asthana)}} >Model.</h3>
        </div>
      </div>
      <div className="center">
        <p ref={para}>Rich with richness of versatility and molded with charms of confidence</p>
      </div>
      <div className="bottom">
         <button>
           Know More
         </button>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Home
