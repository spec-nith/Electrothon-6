import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Computers = ({ isMobile , isTablet}) => {
  const computer = useGLTF("./crook_3d/crook_cosmic_love.glb");

  return (
    <mesh>
      <hemisphereLight intensity={12} groundColor="black" />

      {/* Main spot light */}
      <spotLight
        position={[20, 50, 10]}
        angle={0.7}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />

<spotLight
        position={[-20, 30, -10]}
        angle={0.7}
        penumbra={1}
        intensity={2}
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
        scale={isMobile ? 0.7 : isTablet ? 8 : 16}
        position={isMobile ? [0, -3, -2.5] : isTablet ? [0, -6, 0] : [0, -14, 0]}
        rotation={[0, 0, 0]} 
      />
    </mesh>
  );
};

const CrookCanvas = () => {
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

export default CrookCanvas;
