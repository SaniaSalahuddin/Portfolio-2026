import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import CameraRig from "./CameraRig";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
      <color attach="background" args={["#090909"]} />

      {/* <fog attach="fog" args={["#090909", 8, 18]} /> */}

      <ambientLight intensity={1.2} />

      <CameraRig />

      <ParticleField />
    </Canvas>
  );
}