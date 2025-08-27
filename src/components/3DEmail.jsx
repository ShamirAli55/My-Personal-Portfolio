import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/emoji_heart_message.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.016']}
        position={[0.003, 0.695, 0.069]}
        rotation={[0, 0, -0.776]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Material}
        position={[0.003, 0.72, 0.023]}
      />
    </group>
  )
}

useGLTF.preload('/emoji_heart_message.glb')