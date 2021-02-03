import { useFrame } from 'react-three-fiber'
import React, { useRef , useLoader } from 'react'
import * as THREE from "three";
import img from '../src/fond-texture-papier-espace-design_53876-42312.jpg'



function Sphere (){
  
    const mesh = useRef()
    useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

    return (
      <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[1, 50, 50]} />
      <meshStandardMaterial attach="material" color="indianred" toneMapped={false} />
      </mesh>
    )
  }

  export default Sphere