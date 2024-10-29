import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { throttle } from "lodash";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.08 : 0.1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={0.5}
        intensity={isMobile ? 0.6 : 1} // Reduced light intensity for mobile
        castShadow
        shadow-mapSize={isMobile ? 256 : 1024} // Lower shadow quality on mobile
      />
      <pointLight intensity={isMobile ? 0.7 : 1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth <= 500);
    }, 200); // Throttling resize events

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "demand" : "always"} // Demand frame loop on mobile to save resources
      shadows
      dpr={isMobile ? [0.75, 1] : [1, 2]} // Lower device pixel ratio on mobile
      camera={{ position: [20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ antialias: !isMobile, preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={!isMobile} // Disable zoom on mobile for better performance
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
