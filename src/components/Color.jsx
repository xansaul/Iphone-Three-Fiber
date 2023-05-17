import React from 'react'

export const Color = ({color,classColor,handleClick,colorSelected}) => {
  return (
    <span 
    onClick={()=>handleClick(color)} 
    className={`
      ${classColor} w-8 h-8  hover:cursor-pointer shadow-inner rounded-full 
      ${colorSelected===color?'outline outline-offset-4 outline-sky-500 outline-2':'hover:outline hover:outline-offset-4 hover:outline-gray-300 hover:outline-1'}`}
    />
  )
}
