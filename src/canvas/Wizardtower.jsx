import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Canvas_Loader/Loader";

const Computers = ({ isMobile , isTablet}) => {
 
  const computer = useGLTF("./wizardtower/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={700} groundColor="black" />
 
      {/* Main spot light */}
      <spotLight
        position={[20, 50, 10]}
        angle={0.7}
        penumbra={1}
 
        intensity={8}
 
        castShadow
        shadow-mapSize={1024}
      />

<spotLight
        position={[-20, 30, -10]}
        angle={0.7}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />

      <spotLight
        position={[0, 30, 20]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isTablet ? 0.009 : 0.01}
        position={ isTablet ? [0, -2, 0] : [0, -4, 0]}
        rotation={[0, 1.5, 0]} 
      />
    </mesh>
  );
};

const Wizardtowercanvas = () => {
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

export default Wizardtowercanvas;
