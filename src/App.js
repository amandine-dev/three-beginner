import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars} from "drei";
import Sphere from './Sphere';
import Box from './Box';



import './App.css'


export default function App(){
  //First -get canvas component, empty box
  //Ajout de OrbitControls from drei pour  

  const Plane = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshPhysicalMaterial attach="material" color="white" />
    </mesh>
  )
  return <Canvas>
    

    <OrbitControls/>

    <Stars/>

    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.5}/>

      <Box/>
      <Sphere/>    
      <Plane/>

  </Canvas>
};
