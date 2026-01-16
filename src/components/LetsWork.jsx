import React from 'react'
import { RiGlobalLine } from '@remixicon/react'
import { RiInstagramLine } from '@remixicon/react'
import { RiMailLine } from '@remixicon/react'
import Spline from '@splinetool/react-spline';

const LetsWork = () => {
  return (
    <div className='work'>
      <div className="left">
        <div className="head">
            <h2>Let&apos;s <span>Work</span>  </h2>
            <h2>Together</h2>
        
        </div>

        <div className="socials">
            <div className="handle">
            <span><RiGlobalLine /></span>
            <span>www.rashimodeling.com</span>
            </div>
            <div className="handle">
            <span><RiInstagramLine /></span>
            <span>rashii_asthana</span>
            </div>
            <div className="handle">
            <span><RiMailLine /></span>
            <span>rashiasthana.b@gmail.com</span>
            </div>
        </div>
      </div>
      <div className="right">
     <Spline
        scene="https://prod.spline.design/odQAikM1hUyTF1nq/scene.splinecode" 
      />
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
