import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

function AmongUs(props) {
  const { scene, animations } = useGLTF("/models/among_us.glb");
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(
        animations.find((clip) => clip.name === "Take 001") || animations[0]
      );
      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return <primitive object={scene} {...props} />;
}

const CanvasCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  let scale = 1.2;
  if (isMobile) scale = 0.6;
  else if (isTablet) scale = 0.9;
  else if (isLaptop) scale = 1.2;

  return (
    <div
      className="relative w-full h-[500px] rounded-2xl shadow-lg overflow-hidden"
      style={{ background: "white" }}
    >
      <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
        {/* 💡 Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color={"#ffffff"}
        />
        <directionalLight
          position={[-4, 2, 4]}
          intensity={0.7}
          color={"#87cefa"}
        />
        <spotLight
          position={[0, 6, -6]}
          angle={0.5}
          intensity={1}
          color={"#ffb347"}
          penumbra={0.8}
        />

        <AmongUs position={[0, -1, 0]} rotation={[0, -1.3, 0]} scale={scale} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CanvasCard;
