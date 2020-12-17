import React from 'react'

function Box (){
    return (
      <mesh position={[2, 0, 0.5]}>
        <boxBufferGeometry attach = "geometry"/>
        <meshLambertMaterial attach="material" color="yellow"/>
      </mesh>
    )
  }
export default Box  