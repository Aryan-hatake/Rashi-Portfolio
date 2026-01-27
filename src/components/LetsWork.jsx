
import { lazy, Suspense, React, useEffect,useState } from "react";
import useInView from "../hooks/useInView";

import { RiGlobalLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";
import { matrixText } from './Nav'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from "gsap/SplitText";
import { useMediaQuery } from 'react-responsive'

const Spline = lazy(() =>
  import("@splinetool/react-spline").then(module => ({
    default: module.default || module.Spline
  }))
);


const LetsWork = () => {
       
    gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText);

  const work = useRef()

  useGSAP(()=>{
          let tl = gsap.timeline();

          tl.from(".work .head",{
            x:40,
            scrollTrigger:{
              trigger:".work",
              scroller:"body",
              start:"top 50%",
              end:"bottom bottom",
              markers:true,
              scrub:2
            }
          })
          tl.from(".work .head h2",{
            opacity:0.2,
            stagger:1,
            scrollTrigger:{
              trigger:".work",
              scroller:"body",
              start:"top 50%",
              end:"60% bottom",
              markers:true,
              scrub:2
            }
          })
          tl.from(".work .socials .handle",{
            opacity:0.2,
            y:-20,
            stagger:1,
            scrollTrigger:{
              trigger:".work",
              scroller:"body",
              start:"top 50%",
              end:"60% bottom",
              markers:true,
              scrub:2
            }
          })
          tl.from(".splinewrap",{
            x:30,
            opacity:0.2,
             scrollTrigger:{
              trigger:".work",
              scroller:"body",
              start:"top 50%",
              end:"60% bottom",
              markers:true,
              scrub:2
            }
          })
  })

    const [ref, visible] = useInView({ rootMargin: "200px" })
  const [ready, setReady] = useState(false);

  
   useEffect(() => {
    if (!visible) return;

    requestIdleCallback(() => {
      setReady(true);
    });
  }, [visible]);

  return (
    <div id="Work" className='work'>
      <div className="left">
        <div className="head">
          <h2>Let&apos;s <span ref={work} onMouseEnter={()=>{matrixText(work)}} >Work</span>  </h2>
          <h2>Together</h2>

        </div>

        <div className="socials">
          <div className="handle">
            <span>
             
                <RiGlobalLine />
             
            </span>
            <span><a  href="#Home">www.rashimodeling.com</a></span>
          </div>
          <div className="handle">
            <span>
              <RiInstagramLine />
            
            </span>
            <span><a target="_blank" href="https://www.instagram.com/rashii_asthana/">rashii_asthana</a></span>
          </div>
          <div className="handle">
            <span>
              <RiMailLine />
       
            </span>
            <span><a href="mailto:rashiasthana.b@gmail.com?subjet=Inquiry%20Regarding%20Shoots&body-Hello%20Rashi."></a>rashiasthana.b@gmail.com</span>
          </div>
        </div>
      </div>
      <div  ref={ref} className="right">
        <div className="splineWrap">
           { ready &&
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/odQAikM1hUyTF1nq/scene.splinecode" />
        </Suspense>
          }

      </div>
        </div>
    </div>
  )
}

export default LetsWork
// import Spline from '@splinetool/react-spline/next';

// export default function Home() {
//   return (
//     <main>
//       <Spline
//         scene="https://prod.spline.design/odQAikM1hUyTF1nq/scene.splinecode"
//       />
//     </main>
//   );
// }
