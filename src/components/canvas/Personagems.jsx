import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Scene from "../Scene";
import CanvasLoader from "../Loader";



const SceneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");


    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      
      shadows
      camera={{ position: [24, 40, 5], fov: 10}}
      
     
      >
        <Suspense>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            OrbitControls={false}
            enablePan={false}
            />
            <hemisphereLight intensity={1} groundColor="black"   />
            <spotLight 
              position={[0, 7, -10]}
              color="#f700ff"
              shadows
              intensity={1}
            
            />
            <spotLight 
              position={[0, -7, 10]}
              color="#00d0ff"
              shadows
              intensity={2}
            
            />

            <Scene isMobile = {isMobile}
            scale={isMobile ? 5.2 : 6.3} 
            position={isMobile ? [1.3, -9.8, 0] : [11, -9.4, 0]}
            rotation={isMobile ? [0, 14, 0] : [0, 1, 0]}
             
            />
        </Suspense>
        <Preload all />


      </Canvas>
  )
}


export default SceneCanvas;