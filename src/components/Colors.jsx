import React from 'react'
import { Color } from './Color'


const colors = [
  {
    color:"0xFC3434",
    classColor:"bg-red-500 shadow-red-950"
  },
  {
    color:"0x1AB7F5",
    classColor:"bg-cyan-500 shadow-cyan-950"
  },
  {
    color:"0x484A48",
    classColor:"bg-gray-700 shadow-black"
  },
  {
    color:"0xEAE8E8",
    classColor:"bg-white shadow-slate-200"
  },
  {
    color:"0x1ED089",
    classColor:"bg-emerald-300 shadow-emerald-600"
  },
  {
    color:"0xD286E7",
    classColor:"bg-purple-300 shadow-purple-600"
  },
]


export const Colors = ({setColorBack,colorBack}) => {
  const handleClick = (color) => {
    setColorBack(color)
  }
  return (
    <>
      <p className="text-xl font-semibold my-5">Color</p>
      <div className="flex gap-5">
        {
          colors.map((color)=>(
            <Color key={color.color} {...color} handleClick={handleClick} colorSelected={colorBack} />
          ))
        }
      </div>
    </>
  )
}
