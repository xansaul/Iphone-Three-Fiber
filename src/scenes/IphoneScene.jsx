import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Iphone} from '../modelsCode/Iphone'

export const IphoneScene = () => {
  return (
    <Canvas className="w-full h-full bg-slate-100 mt-5 rounded-3xl"  >
      <directionalLight position={[0, 8, 10]} intensity={10} color={"#C9E5FF"}/>
      <directionalLight position={[0, 10, -100]} intensity={.3} color={"#C9E5FF"}/>

      <ambientLight intensity={4} color={"#C9E5FF"}/>
      
      <pointLight position={[0,50,-500]} intensity={.001}/>
      <pointLight position={[0,-.5,10]} intensity={.01}/>
      
      <spotLight position={[0,3,-1]} intensity={.1} />
      <spotLight position={[0,-4,-1]} intensity={.1}/>

      <Iphone position={[0,-3,0]} scale={.06}  />
      <OrbitControls
        makeDefault 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={.7}
      />
    </Canvas>
  )
}
