import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Float, RoundedBox, Text3D } from "@react-three/drei";
import { Suspense, useRef, type ReactNode } from "react";
import * as THREE from "three";

const FONT = "/fonts/helvetiker_bold.json";

function Rig() {
  const { camera, pointer } = useThree();
  const t0 = useRef<number | null>(null);
  useFrame((state) => {
    if (t0.current === null) t0.current = state.clock.elapsedTime;
    const t = Math.min(1, (state.clock.elapsedTime - t0.current) / 5);
    const ease = 1 - Math.pow(1 - t, 3);
    const z = THREE.MathUtils.lerp(26, 12.5, ease);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.5 + 0.3, 0.04);
    camera.position.z = z;
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

function Line({ text, y, size, color, delay }: { text: string; y: number; size: number; color: string; delay: number }) {
  const ref = useRef<THREE.Group>(null);
  const start = useRef<number | null>(null);
  useFrame((s) => {
    if (!ref.current) return;
    if (start.current === null) start.current = s.clock.elapsedTime;
    const t = Math.max(0, Math.min(1, (s.clock.elapsedTime - start.current - delay) / 2.2));
    // Slow ease-in-out so each line is readable while it settles.
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    ref.current.position.z = THREE.MathUtils.lerp(-5, 0, e);
    ref.current.rotation.x = THREE.MathUtils.lerp(-0.45, 0, e);
    ref.current.scale.setScalar(Math.max(0.0001, e));
  });
  return (
    <group ref={ref} position={[0, y, 0]}>
      <Center>
        <Text3D font={FONT} size={size} height={size * 0.35} bevelEnabled bevelSize={size * 0.025} bevelThickness={size * 0.04} curveSegments={6} letterSpacing={-0.02}>
          {text}
          <meshStandardMaterial color={color} metalness={0.18} roughness={0.32} />
        </Text3D>
      </Center>
    </group>
  );
}

/** Scales the whole scene so the headline always fits the canvas (phones included). */
function Fit({ children }: { children: ReactNode }) {
  const { size } = useThree();
  const aspect = size.width / Math.max(1, size.height);
  // Visible height at the resting camera distance (z = 12.5, fov 42) ≈ 9.6 units.
  const visH = 2 * 12.5 * Math.tan(THREE.MathUtils.degToRad(21));
  const visW = visH * aspect;
  // Widest line ("RUN YOUR HOTEL.") is ~14 units; keep a safety margin on each side.
  const s = Math.min(1, visW / 15.6, visH / 10.2);
  const isNarrow = aspect < 1;
  return (
    <group scale={s} position={[0, isNarrow ? 0.9 : 0, 0]}>
      {children}
    </group>
  );
}

function Panels() {
  return (
    <group position={[0, -3.6, -3]} rotation={[-0.35, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <RoundedBox args={[9, 2.6, 0.12]} radius={0.12} position={[0, 0, 0]}>
          <meshPhysicalMaterial color="#3a0a15" metalness={0.2} roughness={0.15} clearcoat={1} transparent opacity={0.92} />
        </RoundedBox>
        {[-3, -1, 1, 3].map((x, i) => (
          <RoundedBox key={x} args={[1.6, 1.4, 0.1]} radius={0.08} position={[x, 0.1, 0.18 + i * 0.02]}>
            <meshStandardMaterial color={i % 2 ? "#d4ab68" : "#c2465c"} emissive={i % 2 ? "#d4ab68" : "#8e1b2f"} emissiveIntensity={0.35} />
          </RoundedBox>
        ))}
      </Float>
      <Float speed={2} floatIntensity={1.2}>
        <RoundedBox args={[2.2, 1.4, 0.1]} radius={0.1} position={[5.6, 1.6, 0.8]} rotation={[0, -0.4, 0]}>
          <meshStandardMaterial color="#faf6f0" />
        </RoundedBox>
        <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} position={[-5.6, 1.3, 0.6]} rotation={[0, 0.4, 0]}>
          <meshStandardMaterial color="#d4ab68" emissive="#b8873e" emissiveIntensity={0.25} />
        </RoundedBox>
      </Float>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas dpr={[1, 1.75]} style={{ touchAction: "pan-y" }} camera={{ position: [0, 0, 26], fov: 42 }} gl={{ antialias: true, alpha: true }} shadows>
      <ambientLight intensity={0.55} />
      {/* Local lights only (no remote HDR environment) so the scene loads fast and offline-safe on phones. */}
      <hemisphereLight args={["#fff3e0", "#3a0a15", 1.1]} />
      <directionalLight position={[-6, 4, 8]} intensity={1.2} color="#ffe6c4" />
      <directionalLight position={[6, 8, 6]} intensity={2.2} castShadow />
      <pointLight position={[-8, -2, 4]} intensity={40} color="#ff7d93" />
      <pointLight position={[8, 2, 4]} intensity={30} color="#f3c97f" />
      <Suspense fallback={null}>
        <Fit>
        <Line text="RUN YOUR HOTEL." y={1.55} size={1.15} color="#F7F5F0" delay={0.4} />
        <Line text="WE'LL HANDLE" y={-0.05} size={0.82} color="#e0b46a" delay={1.7} />
        <Line text="THE COMPLEXITY." y={-1.3} size={0.82} color="#f4c6cf" delay={3.0} />
        <Panels />
        </Fit>
      </Suspense>
      <Rig />
    </Canvas>
  );
}
