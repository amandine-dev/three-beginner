import { useLoader } from 'react-three-fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import spaceship from '../Static/spaceship/scene.gltf'



function Spaceship() {
    const gltf = useLoader(GLTFLoader, spaceship)
    return <primitive object={gltf.scene} position={[1, 1, 1]} />
  }

  export default Spaceship 