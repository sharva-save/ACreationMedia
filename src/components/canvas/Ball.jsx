import React, { Suspense,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3.75} rotationIntensity={0} floatIntensity={0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[100, 1, 500]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#9a6e88' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [autoRotate, setAutoRotate] = useState(true);
  return (
    <Canvas frameloop='demand'   lazyRadius ={15}  gl={{ preserveDrawingBuffer: true }} >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        enableZoom={false} 
        autoRotate={autoRotate}  
        autoRotateSpeed={7}
      />
      <group 
        onPointerOver={() => setAutoRotate(false)}
        onPointerOut={() => setAutoRotate(true)}
      >
        <Ball imgUrl={icon} />
      </group>
    </Suspense>
    <Preload all />
  </Canvas>
);
}

export default BallCanvas;
