import React from 'react'
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky} from "drei";
import Box from '../Shapes/Box';

function SceneOne(){
  return <Canvas>
    <OrbitControls/>
    <Sky/>
    <ambientLight intensity={0.5}/>
    <spotLight position ={[10, 50, 10]} angle={0.3}/>
      <Box/>
  </Canvas>
}
export default SceneOne
