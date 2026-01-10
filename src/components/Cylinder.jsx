
import { Canvas } from "@react-three/fiber";
import {OrbitControls, useTexture} from '@react-three/drei'
import * as THREE from "three"
import Show from "./Model";
import { Bloom, ToneMapping } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";

export default function Cylinder() {
  
  return (
    <>
    <div className="Cylinder">

    <Canvas flat camera={{fov:30}}>
    <OrbitControls enableZoom={false}/>
    <ambientLight/>
    <Show/>
    <EffectComposer
  
>
{/* your effects go here */}
    <Bloom
    intensity={1} // The bloom intensity.
    
    
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
    mipmapBlur={false} // Enables or disables mipmap blur.
    
    />
  <ToneMapping adaptive />
</EffectComposer>

  </Canvas>
    </div>
  <div>
  
  </div>  
    </>
);


}