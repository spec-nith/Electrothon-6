import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Canvas_Loader/Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./major_poi_3d/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={8} groundColor="black" />

      {/* Main spot light */}
      <spotLight
        position={[20, 50, 10]}
        angle={0.7}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 58 : 20}
        position={isMobile ? [0, -8.5, 1] : isTablet ? [0, -3, 0] : [0, -1, 0]}
        rotation={[0, 0, 0]} 
      />
    </mesh>
  );
};

const SpellCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
  
    useEffect(() => {
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
  
        const tabletMediaQuery = window.matchMedia("(min-width: 501px) and (max-width: 768px)");
        setIsTablet(tabletMediaQuery.matches);
      };
  
      const mediaQuery = window.matchMedia("(max-width: 500px)");
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Initialize tablet mode on component mount
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 3, 25], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SpellCanvas;
