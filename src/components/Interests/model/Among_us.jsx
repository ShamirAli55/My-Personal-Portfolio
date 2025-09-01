import React, { useRef, useMemo, useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/among_us.glb");

  // Clone scene to preserve skeleton + animations
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    let action = actions["Take 001"] || Object.values(actions)[0];

    if (action) {
      action.reset()
        .setLoop(THREE.LoopRepeat, Infinity) // 🔁 repeat forever
        .fadeIn(0.5)
        .play();
    }

    return () => action?.fadeOut(0.5); // cleanup
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={56.605}
        >
          <group
            name="89afb1d86efa4010bbf1fd52426d0beffbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" />
                  <group
                    name="back"
                    position={[-0.564, 1.43, -1000.1]}
                    rotation={[0, -Math.PI / 2, 0]}
                  >
                    <group name="Object_18" />
                  </group>
                  <group name="Among_Us" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Preto}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Vermelho}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Oculos}
                    skeleton={nodes.Object_9.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/among_us.glb");
