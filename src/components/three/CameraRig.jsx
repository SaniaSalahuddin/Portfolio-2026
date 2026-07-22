import { useFrame, useThree } from "@react-three/fiber";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04;

    camera.position.y += (mouse.y * 1 - camera.position.y) * 0.04;

    camera.lookAt(0, 0, 0);
  });

  return null;
}