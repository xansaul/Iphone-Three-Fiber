import React from 'react'

export const Colors = () => {
  return (
    <>
      <p className="text-xl font-semibold my-5">Color</p>
      <div className="flex gap-3">
        <span className="bg-red-500 w-8 h-8 shadow-inner shadow-red-950  rounded-full"></span>
        <span className="bg-cyan-500 w-8 h-8 shadow-inner shadow-cyan-950 rounded-full"></span>
        <span className="bg-gray-700 w-8 h-8 shadow-inner shadow-black rounded-full"></span>
        <span className="bg-slate-white border w-8 shadow-inner shadow-slate-200 h-8 rounded-full"></span>
        <span className="bg-emerald-300 w-8 shadow-inner shadow-emerald-600 h-8 rounded-full"></span>
        <span className="bg-purple-300 w-8 shadow-inner shadow-purple-600 h-8 rounded-full"></span>
 
      </div>
    </>
  )
}
