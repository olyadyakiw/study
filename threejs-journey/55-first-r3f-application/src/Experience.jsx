import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })
    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />

        <group ref={ groupRef }>
            <mesh ref={ cubeRef } scale={ 1.5 } position-x={ 2 } rotation-y={ Math.PI * 0.25 } >
                <boxGeometry scale={ 1.5 } />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh position-x={ -2 } rotation-y={ Math.PI * 0.25 } >
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
        </group>
        <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshBasicMaterial color="greenyellow" />
        </mesh>
    </>
}