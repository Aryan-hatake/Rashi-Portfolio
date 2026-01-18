import { lazy, Suspense, React } from "react";

const RiGlobalLine = lazy(() =>
  import("@remixicon/react").then(m => ({ default: m.RiGlobalLine }))
);
const RiInstagramLine = lazy(() =>
  import("@remixicon/react").then(m => ({ default: m.RiInstagramLine }))
);
const RiMailLine = lazy(() =>
  import("@remixicon/react").then(m => ({ default: m.RiMailLine }))
);

const Spline = lazy(() =>
  import("@splinetool/react-spline").then(module => ({
    default: module.default || module.Spline
  }))
);

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
            <span>
              <Suspense fallback={null}>
                <RiGlobalLine />
              </Suspense>
            </span>
            <span>www.rashimodeling.com</span>
          </div>
          <div className="handle">
            <span><Suspense fallback={null}>
              <RiGlobalLine />
            </Suspense>
            </span>
            <span>rashii_asthana</span>
          </div>
          <div className="handle">
            <span><Suspense fallback={null}>
              <RiGlobalLine />
            </Suspense>
            </span>
            <span>rashiasthana.b@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/odQAikM1hUyTF1nq/scene.splinecode" />
        </Suspense>

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
