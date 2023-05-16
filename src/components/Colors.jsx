import React, { useState } from 'react'

export const Colors = ({setColorBack}) => {
  const handleClick = (colorBack) => {
  console.log("asd")
    setColorBack(colorBack)
  }
  return (
    <>
      <p className="text-xl font-semibold my-5">Color</p>
      <div className="flex gap-3">
        <span onClick={()=>handleClick('0xE72424')} className="bg-red-500 w-8 h-8  hover:cursor-pointer  shadow-inner shadow-red-950  rounded-full"></span>
        <span onClick={()=>handleClick('0x0E92C6')} className="bg-cyan-500 w-8 h-8  hover:cursor-pointer shadow-inner shadow-cyan-950 rounded-full"></span>
        <span onClick={()=>handleClick('0x484A48')} className="bg-gray-700 w-8 h-8  hover:cursor-pointer shadow-inner shadow-black rounded-full"></span>
        <span onClick={()=>handleClick('0xEAE8E8')} className="bg-slate-white border  hover:cursor-pointer w-8 shadow-inner shadow-slate-200 h-8 rounded-full"></span>
        <span onClick={()=>handleClick('0x1ED089')} className="bg-emerald-300 w-8 hover:cursor-pointer shadow-inner shadow-emerald-600 h-8 rounded-full"></span>
        <span onClick={()=>handleClick('0xD286E7')} className="bg-purple-300 w-8  hover:cursor-pointer shadow-inner shadow-purple-600 h-8 rounded-full"></span>
 
      </div>
    </>
  )
}
