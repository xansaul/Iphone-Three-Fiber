import {  Environment, Lightformer, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Iphone} from '../modelsCode/Iphone'
import * as THREE from 'three'

const EnvironIllumination = () => {
  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
          <Lightformer key={i} form="circle" intensity={1.2} rotation={[Math.PI / 2, 0, 0]} position={[x, 5, i * 100]} scale={[4, 1, 1]} />
          ))}
        <Lightformer intensity={.05} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[30, 2, 1]} />
        <Lightformer intensity={.05} rotation-y={Math.PI / 2} position={[5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        <Lightformer intensity={.5} rotation-y={-Math.PI / 2} position={[-10, 1, 0]} scale={[50, 2, 1]} />
      </group>
    </Environment>
  )
}


export const IphoneScene = () => {
  return (
    <Canvas 
      className="w-full h-full bg-slate-100 mt-5 rounded-3xl"
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 3.4,
      }}
    >
      {/* Illumination scene */}
      <directionalLight position={[0, 8, 10]} intensity={4} color={"#C9E5FF"}/>
      <ambientLight intensity={1} color={"#C9E5FF"}/>
      <EnvironIllumination />
      <spotLight position={[0,4,-2]} intensity={.05}/>
      <spotLight position={[0,-4,-2]} intensity={.05}/>

      {/* 3D model and controls */}
      <Iphone position={[0,-3,0]} scale={.06} />
      <OrbitControls
        makeDefault 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={.2}
      />

    </Canvas>
  )
}
