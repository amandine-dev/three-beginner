import { useFrame } from 'react-three-fiber'
import * as THREE from 'three';
import React, { useMemo, useRef } from 'react'

import maptexture from '../Assets/map-ok.png'



function Sphere (){
    const mesh = useRef()

    useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  const texture = useMemo(() => new THREE.TextureLoader().load(maptexture), []);


    return (
      <mesh ref={mesh} position={[2, -1, 0.5]}>
      <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
      <meshLambertMaterial attach="material" color="indianred" map={texture} transparent />
      </mesh>
    
    )
  }

  export default Sphere