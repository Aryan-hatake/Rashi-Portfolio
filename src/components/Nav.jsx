import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import SplitText from "gsap/SplitText";

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'


export const matrixText = function (element) {
   
  
   let interval;
   (function () {


      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      const text = element.current.innerHTML

      element.current.addEventListener("mouseenter", () => {

         var count = 0  //-2


         clearInterval(interval)

         interval = setInterval(() => {

            var ranStr = text.split("").map((e, i) => {
               var rand = Math.floor(Math.random() * 53)

               if (i <= count) {
                  return e;
               }
               return characters.split("")[rand]
            }).join("")

            if (count >= text.length - 1) {
               clearInterval(interval)
            }
            count += 0.8; //do ++ for speed
         
            element.current.innerHTML = ranStr

         }, 80)


      })
   })()

}
const Nav = () => {
   gsap.registerPlugin(useGSAP);
   gsap.registerPlugin(SplitText);

   const teenIndia = useRef()
   const year = useRef()

   useGSAP(() => {
      let tl = gsap.timeline()

      tl.from("h2", {
         opacity: 0,
         duration: 0.8,
         ease: "power1.inOut",
      })

     
      tl.from(teenIndia.current, {
         opacity: 0,
         x:-10,
         duration: 0.8,
         ease: "power3.out"
      });
      tl.from(year.current, {
         opacity:0,
         x:10,
         duration: 0.8,
         ease: "power3.out"
      });
      tl.from(".m-Line", {
         width:0,
      
         duration: 0.8,
         ease: "power3.out"
      },);
      tl.from(".ham",{
         x:10,
         opacity:0,
         duration:0.8,
         ease:"power3.inOut"
      })
      

   })

   return (
      <nav>
         <h2 >Rashi <span    >Asthana</span></h2>
         <div className="milestone">
            <span ref={teenIndia} onMouseEnter={() => { matrixText(teenIndia) }}  >TEEN INDIA FINALIST</span>
            <div className="m-Line"></div>
            <span ref={year} onMouseEnter={() => { matrixText(year) }}>2022</span>
         </div>
         <div  className="ham">
            <i className="ri-menu-4-fill"></i>
         </div>
      </nav>
   )
}

export default Nav
