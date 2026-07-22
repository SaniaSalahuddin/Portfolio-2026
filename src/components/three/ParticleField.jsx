import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 5000;

export default function ParticleField() {
  const points = useRef();
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return arr;
  }, []);

  const original = useMemo(() => new Float32Array(positions), [positions]);

  useFrame(({clock}) => {
      if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array;
   const t = clock.elapsedTime;
    const mx = mouse.x * 8;
    const my = mouse.y * 5;

    for (let i = 0; i < COUNT; i++) {
   
      const index = i * 3;

      const ox = original[index];
      const oy = original[index + 1];
      const oz = original[index + 2];

let z = pos[index + 2];

      let x = pos[index];
      let y = pos[index + 1];

      const dx = x - mx;
      const dy = y - my;

      const distance = Math.max(
  Math.sqrt(dx * dx + dy * dy),
  0.001
);

   const radius = 2;

if (distance < radius) {
  const force = ((radius - distance) / radius) ** 2;
const strength = 0.12;

x += (dx / distance) * force * strength;
y += (dy / distance) * force * strength;

  z += force * 0.3;
}

   const ease = 0.03;

x += (ox - x) * ease;
y += (oy - y) * ease;
z += (oz - z) * ease;
y += Math.sin(t * 0.8 + i) * 0.003;
      pos[index] = x;
      pos[index + 1] = y;
      pos[index + 2] = z;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>
<pointsMaterial
  color="#f8fafc"
  size={0.03}
  transparent
  opacity={0.75}
  sizeAttenuation
  depthWrite={false}
  blending={THREE.AdditiveBlending}
/>
    </points>
  );
}