import {  shaderMaterial, Sparkles, Center, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three' 
import { useRef } from 'react'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalVertexFragment from './shaders/portal/fragment.glsl'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
    },
    portalVertexShader,
    portalVertexFragment
)


extend({ PortalMaterial })

export default function Experience()

{
    const { nodes } = useGLTF('./model/portal.glb')
    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false

    const porralMaterial = useRef()

    useFrame((state, delta) => {
        porralMaterial.current.uTime += delta
    })

    return <>

        <color args={ [ '#030202' ] } attach="background" />

        <OrbitControls makeDefault />

        <Center>
            <mesh geometry={ nodes.baked.geometry }>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>

            <mesh geometry={ nodes.poleLightA.geometry }
                  position={ nodes.poleLightA.position } 
            >
                <meshBasicMaterial color="#ffffe5" />
            </mesh>
            
            <mesh geometry={ nodes.poleLightB.geometry }
                  position={ nodes.poleLightB.position } 
            >
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <mesh geometry={ nodes.portalLight.geometry }
                  position={ nodes.portalLight.position }
                  rotation={ nodes.portalLight.rotation }
            >
                <portalMaterial ref={ porralMaterial } />
            </mesh>

            <Sparkles size={ 6 } scale={ [ 4, 2, 4 ] } position-y={ 1 } speed={ 0.2 } count={ 40 }  />
        </Center>

    </>
}