import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars} from "drei";
import Sphere from '../Shapes/Sphere';
import Box from '../Shapes/Box';

function SceneOne(){
  return <Canvas>
    <OrbitControls/>
    <Stars/>
    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.3}/>
      <Box/>
      <Sphere/>    
  </Canvas>
}
export default SceneOne

