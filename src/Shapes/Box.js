import React, { useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import Sphere from './Sphere'



function Box (){
  const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    
    const meshRef = useRef()

    useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.03
  })
    
    return (
      
      <mesh ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}

        onClick={() => setActive(!active)}
        scale={active? [2,2,2] : [1,1,1]}
        position={[2, 1, 0.5]}
        > 
        
        <boxBufferGeometry 
        attach = "geometry"
        args= {[10,1,1]}/>
        
        <meshLambertMaterial attach="material" color={hovered ? "lightgreen" : "yellow"}/>
        <Sphere/>

        
        
      </mesh>
    )
  }
export default Box  