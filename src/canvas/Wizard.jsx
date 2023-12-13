import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./lizard_wizard_texture_export/scene.gltf");

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
        scale={isMobile ? 0.7 : 20}
        position={isMobile ? [0, -3, -2.5] : [0, -20, 0]}
        rotation={[0, 0, 0]} 
      />
    </mesh>
  );
};

const WizardCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
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
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default WizardCanvas;
