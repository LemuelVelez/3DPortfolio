import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={1.5}
      rotationIntensity={isMobile ? 0.5 : 1} // Lower rotation intensity on mobile
      floatIntensity={isMobile ? 1.5 : 2} // Reduce float intensity on mobile
    >
      <ambientLight intensity={isMobile ? 0.15 : 0.25} />{" "}
      {/* Dim lighting for mobile */}
      <directionalLight
        position={[0, 0, 0.05]}
        intensity={isMobile ? 0.5 : 1}
      />
      <mesh castShadow={false} receiveShadow scale={2.5}>
        {" "}
        {/* Disable casting shadows */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.8} // Slightly smaller scale for better performance on mobile
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower device pixel ratio on mobile
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
