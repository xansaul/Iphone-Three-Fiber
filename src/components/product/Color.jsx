import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

export const Color = ({classColor,color}) => {
  const { colorState,setColorState } = useContext(ProductContext)
  
  return (
    <span 
    onClick={()=>setColorState(color)} 
    className={`
      ${classColor} w-8 h-8  hover:cursor-pointer shadow-inner rounded-full 
      ${colorState===color?'outline outline-offset-4 outline-sky-500 outline-2':'hover:outline hover:outline-offset-4 hover:outline-gray-300 hover:outline-1'}`}
    />
  )
}
