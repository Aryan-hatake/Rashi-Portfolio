import React from 'react'

import { useMediaQuery } from 'react-responsive'
import { lazy, Suspense } from "react";
import useInView from '../hooks/useInView';
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from "gsap/SplitText";
import { imgMove,imgDefault } from './Home';

const Cylinder = lazy(() => import("./Cylinder"));



const Strength = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText);

  const img1 = useRef()
  const img2 = useRef()

  const [ref, visible] = useInView();

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1400px)' })

 
  useGSAP(()=>{
    let tl = gsap.timeline();

    
    
    tl.from(".scard",{
       
      opacity:0.3,
      x:50,
      stagger:0.9,
      scrollTrigger:{
          trigger:".scard",
          scroller:"body",
          start:"-30% 50%",
          end:"50% 70%",
          scrub:2
      }

    })
    tl.from(".second-sm",{
      opacity:0,
      y:-50,
      scrollTrigger:{
        trigger:".second-sm",
        scroller:"body",
      
        start:"top 50%",
        end:"bottom 70%",
        scrub:2
      }
    })
    tl.from(img1.current,{
      x:-20,
      opacity:0.2,
      scrollTrigger:{
        trigger:".Strength",
        scroller:"body",
 
        start:"top top",
        end:"bottom bottom",
        scrub:2
      }
    })
    tl.from(img2.current,{
      x:20,
      opacity:0.2,
      scrollTrigger:{
        trigger:".Strength",
        scroller:"body",
  
        start:"top top",
        end:"bottom bottom",
        scrub:2
      }
    })
  })

  return (
    <div className='Strength'>
      {!isSmallScreen && <div className="second-lg">
        <div className="imgCont">
          <img ref={img1}  onMouseMove={(e)=>{imgMove(img1,e)}} onMouseLeave={()=>{imgDefault(img2)}} loading="lazy" src="/images/4.webp" alt="" />
        </div>
        <div className="imgCont">
          <img ref={img2} onMouseMove={(e)=>{imgMove(img2,e)}} onMouseLeave={()=>{imgDefault(img2)}} loading="lazy" src="/images/2.webp" alt="" />
        </div>
      </div>}

      {isSmallScreen && <div className="first">
        <h1 >My Strength</h1>
        <h3></h3>

      </div>}

      {
        isSmallScreen &&
        <div ref={ref} className="second-sm">
          {visible && <Suspense fallback={null}>
            <Cylinder />
          </Suspense>}

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
