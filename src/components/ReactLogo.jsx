/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props)=> {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float dispose={null} floatIntensity={2}  >
      <group position={[17,0,1]} scale={0.01} {...props} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[10, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;