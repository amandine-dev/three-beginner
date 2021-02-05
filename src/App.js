import React, { Suspense } from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars, RoundedBox} from "drei";
import Sphere from './Shapes/Sphere';
import Box from './Shapes/Box';
import Poly from './Shapes/Poly';
import Plane from './Shapes/Plane'


import './App.css'


export default function App(){
  //First -get canvas component, empty box
  //Ajout de OrbitControls from drei pour  

  return <Canvas>
    <fog attach="fog" args={["white", 0, 100]} />


    <Stars/>

    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.5}/>
    
      <Box/>
      <Poly/>

      <Sphere/>  
      <Suspense fallback={null}>
      <Plane/></Suspense>  
          
      

  </Canvas>
};
