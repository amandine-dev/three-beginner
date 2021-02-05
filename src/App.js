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

    <OrbitControls/>

    <Stars/>

    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.5}/>
    <RoundedBox
  args={[1, 1, 1]} // Width, Height and Depth of the box
  radius={0.05} // Border-Radius of the box
  smoothness={4} // Optional, number of subdivisions
  position={[1, 1, -3]}>
  <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
</RoundedBox>
      <Box/>
      <Poly/>
      <Suspense fallback={null}>

      <Sphere/>  
      </Suspense> 
      <Suspense fallback={null}>
      <Plane/></Suspense>  
          
      

  </Canvas>
};
