import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, Clouds, Cloud, useGLTF, useAnimations } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// ----------------------
// Animated Among Us Model
// ----------------------
const AmongUsAnimated = React.forwardRef(({ targetRotation = [0, -Math.PI / 2 - 0.5, 0], scale = 1.2 }, ref) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/among_us.glb"); 
  const { actions } = useAnimations(animations, group);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].reset().play(); 
    }
  }, [actions]);

  useEffect(() => {
    const handle = (e) => setInteracting(e.detail);
    window.addEventListener("amongus-interact", handle);
    return () => window.removeEventListener("amongus-interact", handle);
  }, []);

  useFrame(() => {
    if (!interacting && group.current) {
      group.current.rotation.x += (targetRotation[0] - group.current.rotation.x) * 0.05;
      group.current.rotation.y += (targetRotation[1] - group.current.rotation.y) * 0.05;
      group.current.rotation.z += (targetRotation[2] - group.current.rotation.z) * 0.05;
    }
  });

  return (
    <primitive
      ref={(node) => {
        group.current = node;
        if (ref) ref.current = node; // forward ref to chase cam
      }}
      object={scene}
      position={[0.5, -3, 0]}
      scale={scale}
      rotation={[0, -Math.PI / 2 - 0.5, 0]} 
    />
  );
});

// ----------------------
// Chase Camera Component
// ----------------------
const ChaseCamera = ({ targetRef, offset = [0, 3, 8] }) => {
  const { camera } = useThree();
  const smooth = useRef({ x: camera.position.x, y: camera.position.y, z: camera.position.z });

  useFrame(() => {
    if (!targetRef?.current) return;

    const target = targetRef.current.position;
    const desiredX = target.x + offset[0];
    const desiredY = target.y + offset[1];
    const desiredZ = target.z + offset[2];

    smooth.current.x += (desiredX - smooth.current.x) * 0.05;
    smooth.current.y += (desiredY - smooth.current.y) * 0.05;
    smooth.current.z += (desiredZ - smooth.current.z) * 0.05;

    camera.position.set(smooth.current.x, smooth.current.y, smooth.current.z);
    camera.lookAt(target.x, target.y + 1, target.z); 
  });

  return null;
};

// ----------------------
// Moving Ground Effect
// ----------------------
const MovingGround = () => {
  const ref = useRef();
useFrame((state, delta) => {
  if (ref.current) {
    ref.current.position.x -= delta * 2;  
    if (ref.current.position.x < -50) ref.current.position.x = 0;
  }
});

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="#4caf50" />
    </mesh>
  );
};


const Path = () => (
  <mesh rotation={[-Math.PI / 2, Math.PI / 2, 0]} position={[1, -5.3, 0]}>
    <planeGeometry args={[5, 500]} />
    <meshStandardMaterial color="#555555" />
  </mesh>
);

const DriftingCloud = ({ seed, scale, position, direction = 1 }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.x += delta * direction * 0.5;
      if (ref.current.position.x > 15) ref.current.position.x = -15;
      if (ref.current.position.x < -15) ref.current.position.x = 15;
    }
  });
  return <Cloud ref={ref} seed={seed} scale={scale} position={position} />;
};

// ----------------------
// Main Canvas Card
// ----------------------
const CanvasCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  let scale = 1.2;
  if (isMobile) scale = 0.6;
  else if (isTablet) scale = 0.9;
  else if (isLaptop) scale = 1.2;

  const amongUsRef = useRef();

  return (
    <div
      className="relative w-full h-full rounded-2xl shadow-lg overflow-hidden"
      style={{ background: "#87CEEB" }}
    >
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#ffeedd" />

        <Sky sunPosition={[50, 5, 50]} turbidity={8} rayleigh={6} />

        <Clouds>
          <DriftingCloud seed={1} scale={0.8} position={[-5, 4, -6]} direction={1} />
          <DriftingCloud seed={2} scale={0.8} position={[5, 5, -8]} direction={-1} />
          <DriftingCloud seed={3} scale={0.8} position={[0, 4, -5]} direction={1} />
        </Clouds>

        <MovingGround />
        <Path />

        <AmongUsAnimated ref={amongUsRef} scale={scale} />
        <ChaseCamera targetRef={amongUsRef} offset={[8, 2, 1]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          onStart={() => window.dispatchEvent(new CustomEvent("amongus-interact", { detail: true }))}
          onEnd={() => window.dispatchEvent(new CustomEvent("amongus-interact", { detail: false }))}
        />
      </Canvas>
    </div>
  );
};

export default CanvasCard;
