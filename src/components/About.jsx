import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from "gsap/SplitText";



import { matrixText } from './Nav'

const About = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText);

  const frame1 = useRef()
  const frame2 = useRef()

  const about1 = useRef()
  const about2 = useRef()

  const para1 = useRef();
  const para2 = useRef();
  const para3 = useRef();




  useGSAP(() => {

      const split1 = new SplitText(para1.current, {
    type: "chars"
  });
      const split2 = new SplitText(para2.current, {
    type: "chars"
  });
      const split3 = new SplitText(para3.current, {
    type: "chars"
  });
  console.log(split2)


    let tl = gsap.timeline({

    })

    tl.from(".first h1", {
      opacity: 0.3,
      scrollTrigger: {
        trigger: ".first h1",
        scroller: "body",
        
        start: "-100% top",
        end: "bottom bottom",
        scrub: 2
      }
    })
    tl.from(".first h3", {
      opacity: 0.3,
      x: 20,
      scrollTrigger: {
        trigger: ".first h1",
        scroller: "body",
        
        start: "-100% top",
        end: "bottom bottom",
        scrub: 2
      }
    })
    tl.from(frame1.current, {
      scale: 0.4,
      scrollTrigger: {
        trigger: ".About",
        scroller: "body",
     
        start: "top top",
        end: "30% 10%",
        scrub: 2
      }
    })
    tl.from(frame2.current, {
      scale: 0.4,
      y: -30 + "%",
      x: 30 + "%",
      scrollTrigger: {
        trigger: ".About",
        scroller: "body",
      
        start: "top top",
        end: "30% 10%",
        scrub: 2
      }
    })
    tl.fromTo(split1.chars, {
      color:"#443939",
     
     
    },{
      color:"rgb(170, 163, 163)",
       stagger: 0.8,
       ease: "sine.inOut",
       scrollTrigger: {
        trigger: ".About",
        scroller: "body",
       
      start: "top 40%",
        end: "bottom bottom",
        scrub: 2
      }
    }
  
  )
    tl.fromTo(split2.chars, {
      color:"#443939",
     
     
    },{
      color:"rgb(170, 163, 163)",
       stagger: 0.8,
       ease: "sine.inOut",
       scrollTrigger: {
        trigger: ".About",
        scroller: "body",
        
        start: "top 40%",
        end: "bottom bottom",
        scrub: 2
      }
    }
  
  )
    tl.from(".line",{
    width:0,
    ease:"sine.inOut",
     scrollTrigger: {
        trigger: ".About",
        scroller: "body",
        start: "top 40%",
        end: "bottom bottom",
        scrub:2
        
      }
  })
   tl.fromTo(split3.chars, {
      color:"#443939",
     
     
    },{
      color:"rgb(170, 163, 163)",
       stagger: 0.8,
       ease: "sine.inOut",
       scrollTrigger: {
        trigger: ".About",
        scroller: "body",
        start: " top top",
        end: "bottom bottom",
        scrub: 2
      }
    }
  
  )
    



    
  return () => {
  split1.revert();
  split2.revert();
};



  })

  return (
    <div className='About'>
      <div className="first">
        <h1>ABOUT ME</h1>
        <h3>Rashi Asthana .</h3>
      </div>
      <div className="second">
        <div className="right">
          <div ref={frame1} className="img-Cont">
            <img src="/images/9.webp" loading='lazy' alt="" />
          </div>
        </div>
        <div className="left">
          <div ref={frame2} className="img-Cont">
            <img src="/images/10.webp" loading='lazy' alt="" />
          </div>
        </div>
      </div>
      <div className="lower-content">

        <div className="third">
          <div className="left">
            <h2 ref={about1} onMouseEnter={()=>{matrixText(about1)}}  >About me</h2>
            <p ref={para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quidem maiores rem, magnam quis nostrum sunt eveniet dignissimos provident ad reprehenderit ex, molestiae deleniti earum officia expedita asperiores laudantium.</p>
          </div>
          <div className="right">
            <h2 ref={about2} onMouseEnter={()=>{matrixText(about2)}} >About Portfolio</h2>
            <p ref={para2} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid mollitia beatae iste eligendi facilis tempore quas architecto fugiat alias atque quae error sed assumenda qui, cumque impedit harum deserunt.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="journey" >
          <p ref={para3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius deserunt nulla consequatur rem. Nemo molestiae voluptas possimus corrupti enim cupiditate quaerat laudantium. Error voluptates iure pariatur molestias velit, voluptatibus quisquam quia dicta. Laborum impedit, ea magnam in necessitatibus architecto magni aperiam temporibus soluta asperiores ipsa eum sunt minus ducimus iusto eius odio assumenda deserunt. Quas ea voluptatibus ipsam repudiandae.</p>
        </div>
      </div>
    </div>
  )
}

export default About
