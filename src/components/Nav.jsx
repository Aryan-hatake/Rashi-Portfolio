import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import SplitText from "gsap/SplitText";

import { useRef} from 'react'
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

      tl.from("nav h2", {
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


   const hamSelection = (e)=>{ 
      console.log(e.target)
      gsap.to(e.target,{
         backgroundColor:"white",
         width:100+"vw",
         color:"black",
         ease:"power4.Out"
      })
   }
   const LinkSelection = (e)=>{ 
         
      gsap.to(e.target,{
         width:0+"vw",
         textDecoration:"underline",
         ease:"power4.Out"
      })
   }
   const LinkDeSelection = (e)=>{ 
         
      gsap.to(e.target,{
         textDecoration:"none",
         ease:"power4.Out"
      })
   }
   const hamDeSelection = (e)=>{ 
         
      gsap.to(e.target,{
         backgroundColor:"black",
         color:"white",
         ease:"power4.Out"
      })
   }
   const hamSlideClosed = ()=>{
  
      let tl = gsap.timeline()
      
       tl.to(".navigation li",{
         zIndex:-10,
               opacity:0    
       })
       tl.to(".navigation .close",{
               zIndex:-10,
               opacity:0   
      })
      tl.to(".navigation .NavHandles",{  
            zIndex:-10,
      opacity:0
      
      })
      tl.to(".navigation",{  
       height:0,
       display:"none"
         
      })
   }
   const hamSlideOpen = ()=>{
    

 

      let tl = gsap.timeline()
     
      tl.to(".navigation",{  
       height:100+"vh",
       display:"flex"
         
      })
     tl.to(".navigation li",{
      zIndex:1,
       opacity:1       
     })
     tl.to(".navigation .close",{
      zIndex:1,
       opacity:1       
     })
     tl.to(".navigation .NavHandles",{
       zIndex:1, 
     opacity:1    
     })
   
   }
   

   return (
   <>
   <div className="navigation">
        <div onClick={()=>{hamSlideClosed()}} className="close">
         Close
        </div>
        <ul>
        <li   ><a href="#Home" onMouseEnter={(e)=>{hamSelection(e)}} onMouseLeave={(e)=>{hamDeSelection(e)}} onClick={hamSlideClosed}>Home</a></li>
        <li  ><a onMouseEnter={(e)=>{hamSelection(e)}} onMouseLeave={(e)=>{hamDeSelection(e)}} href="#About" onClick={hamSlideClosed}>About</a></li>
        <li  ><a onMouseEnter={(e)=>{hamSelection(e)}} onMouseLeave={(e)=>{hamDeSelection(e)}} href="#Strength" onClick={hamSlideClosed}>Strength</a></li>
        <li  ><a onMouseEnter={(e)=>{hamSelection(e)}} onMouseLeave={(e)=>{hamDeSelection(e)}} href="#Project" onClick={hamSlideClosed}>Project</a></li>
        <li ><a  onMouseEnter={(e)=>{hamSelection(e)}} onMouseLeave={(e)=>{hamDeSelection(e)}} href="#Services" onClick={hamSlideClosed}>Services</a></li>
        </ul>
        <div className='NavHandles'>
         <div className="link" onMouseEnter={(e)=>{LinkSelection(e)}} onMouseLeave={(e)=>{LinkDeSelection(e)}}>Instagram <i class="ri-arrow-right-up-long-line"></i></div>
         <div className="link" onMouseEnter={(e)=>{LinkSelection(e)}} onMouseLeave={(e)=>{LinkDeSelection(e)}}>Mail <i class="ri-arrow-right-up-long-line"></i></div>
        </div>
     </div>


      <nav id='Nav'>
         <h2 >Rashi <span>Asthana</span></h2>
         <div className="milestone">
            <span ref={teenIndia} onMouseEnter={() => { matrixText(teenIndia) }}  >TEEN INDIA FINALIST</span>
            <div className="m-Line"></div>
            <span ref={year} onMouseEnter={() => { matrixText(year) }}>2022</span>
         </div>
         <div   className="ham">
            <i onClick={hamSlideOpen}   className="ri-menu-4-fill"></i>
         </div>
      </nav>
   </>
   )
}

export default Nav
