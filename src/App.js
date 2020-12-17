import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars} from "drei";
import Sphere from './Sphere';
import Box from './Box';


import './App.css'


export default function App(){
  return <Canvas>
    <OrbitControls/>
    <Stars/>

    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.3}/>
      <Box/>
      <Sphere/>    
  </Canvas>
};
