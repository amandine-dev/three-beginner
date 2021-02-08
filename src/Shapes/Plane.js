
import * as THREE from "three";
import map from "../Assets/water.jpg";
import React, { useMemo, useRef } from 'react'


function Plane() {
    
    const texture = useMemo(() => new THREE.TextureLoader().load(map), []);

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <meshPhongMaterial attach="material" map={texture}/>   
        </mesh>
    )
}

export default Plane;

