import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky } from "drei"
import './App.css'

function Box (){
  return (
    <mesh>
      <boxBufferGeometry attach = "geometry"/>
      <meshLambertMaterial attach="material" color="yellow"/>
    </mesh>
  )
}



export default function App(){
  return <Canvas>
    <OrbitControls/>
    <Sky />

    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 15, 10]} angle={0.3}/>
    <Box/>
  </Canvas>
};
