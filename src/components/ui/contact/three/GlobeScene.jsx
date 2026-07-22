import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import GlobeObject from "./GlobeObject";

export default function GlobeScene() {
  return (
<Canvas
    className="!w-full !h-full"
    camera={{
        position:[0,0,520],
        fov:35
    }}
>
      {/* Lights */}
      <ambientLight intensity={2} />

      <directionalLight
        position={[100, 100, 100]}
        intensity={3}
      />

      {/* Background Stars */}
      <Stars
        radius={300}
        depth={60}
        count={3000}
        factor={4}
        fade
      />

      {/* Globe */}
      <GlobeObject />

      {/* Controls */}
     <OrbitControls
    enableZoom={false}
    autoRotate
    autoRotateSpeed={0.5}
    minDistance={500}
    maxDistance={500}
/>

    </Canvas>
  );
}