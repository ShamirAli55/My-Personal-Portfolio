import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function AuroraPlane() {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) * 0.05;
    mesh.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) * 0.05;
  });
  return (
    <mesh ref={mesh} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50, 64, 64]} />
      <meshStandardMaterial
        color={"#1a1a2e"}
        emissive={"#3f0071"}
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
}

function FloatingOrb({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={1.5} />
    </mesh>
  );
}

function Vinyl() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={ref} position={[0, -1, -5]}>
      <circleGeometry args={[2, 64]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  );
}

const CanvasCard = () => {
  return (
    <div className="relative w-full h-[400px] bg-black rounded-2xl shadow-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AuroraPlane />
        <Stars radius={50} depth={20} count={3000} factor={4} fade />
        <FloatingOrb position={[3, 1, -6]} color="#ff0080" />
        <FloatingOrb position={[-4, -2, -6]} color="#00ffff" />
        <Vinyl />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CanvasCard;
