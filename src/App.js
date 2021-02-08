import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars, RoundedBox, Sky} from "drei";
import Sphere from './Shapes/Sphere';
import Box from './Shapes/Box';
import Poly from './Shapes/Poly';
import Plane from './Shapes/Plane'


import './App.css'


export default function App(){
   

  return <Canvas>
    <OrbitControls/>

    <Poly/>

    <Stars/>
    <Sphere/>
    <Box/>
    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.5}/>

      <Plane/>

  </Canvas>
};
