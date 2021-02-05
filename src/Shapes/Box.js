import React, { useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { RoundedBox } from "drei";



function Box (){
  const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    

    //faire tourner la boite sur y et x
    const meshRef = useRef()
    useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.03
  })
    
    return (
      //mesh ==>  it's an element; an objet with mesh with is points connected to a surface
      //boxBufferGeometry ==>  this is an object, no children. Property attachn declare 
      //args pour la taille

      <mesh ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setActive(!active)}
        scale={active? [2,2,2] : [1,1,1]}
        position={[2, 1, 0.5]}
        > 
        
        <boxBufferGeometry 
        attach = "geometry"
        args= {[1,1,1]}/>
        
        <meshLambertMaterial attach="material" color={hovered ? "lightgreen" : "yellow"}/>
        
        <RoundedBox
  args={[1, 1, 1]} // Width, Height and Depth of the box
  radius={0.05} // Border-Radius of the box
  smoothness={4} // Optional, number of subdivisions
  position={[1, 1, -3]}>
  <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
</RoundedBox>
      </mesh>
    )
  }
export default Box  