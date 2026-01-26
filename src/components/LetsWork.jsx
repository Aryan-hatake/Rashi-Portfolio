
import { lazy, Suspense, React, useEffect,useState } from "react";
import useInView from "../hooks/useInView";

import { RiGlobalLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiMailLine } from "@remixicon/react";
const Spline = lazy(() =>
  import("@splinetool/react-spline").then(module => ({
    default: module.default || module.Spline
  }))
);



const LetsWork = () => {

    const [ref, visible] = useInView({ rootMargin: "200px" })
  const [ready, setReady] = useState(false);

  
   useEffect(() => {
    if (!visible) return;

    requestIdleCallback(() => {
      setReady(true);
    });
  }, [visible]);

  return (
    <div className='work'>
      <div className="left">
        <div className="head">
          <h2>Let&apos;s <span>Work</span>  </h2>
          <h2>Together</h2>

        </div>

        <div className="socials">
          <div className="handle">
            <span>
             
                <RiGlobalLine />
             
            </span>
            <span>www.rashimodeling.com</span>
          </div>
          <div className="handle">
            <span>
              <RiInstagramLine />
            
            </span>
            <span>rashii_asthana</span>
          </div>
          <div className="handle">
            <span>
              <RiMailLine />
       
            </span>
            <span>rashiasthana.b@gmail.com</span>
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
