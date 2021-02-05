import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import React  from "react";
import { useLoader } from "react-three-fiber"

function Plane() {
    

    const [texture] = useLoader(TextureLoader, 'textures/grasslight-big.jpg');

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1500, 1500);
        texture.anisotropy = 16;
    }

    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeBufferGeometry attach="geometry" args={[20, 20]} />
            {texture &&
                <meshPhongMaterial attach="material" map={texture} />
            }

        </mesh>
    )
}

export default Plane;

