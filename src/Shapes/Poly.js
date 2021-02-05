import React, { useRef, useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import { useDrag } from "react-use-gesture";

function Poly() {
    const ref = useRef();

    const colors = ["lightpink", "lightred", "lightblue", "lightgreen", "lightyellow"];
    const [colorIdx, setColorIdx] = useState(0);

    useFrame(() => {
        ref.current.rotation.z += 0.01
        ref.current.rotation.x += 0.01
    });

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    const [position, setPosition] = useState([0, 0, 0]);

    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        setPosition([x / aspect , -y /aspect, z]);
    }, { pointerEvents: true });

    



    return (
        <mesh ref={ref} position={position} {...bind()}

        onClick={e => {
            if (colorIdx === 4) {
                setColorIdx(0);
            } else {
                setColorIdx(colorIdx+1);
            }
        }}
        
        >

            <dodecahedronBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color={colors[colorIdx]} />

        </mesh>
    )
}

export default Poly


