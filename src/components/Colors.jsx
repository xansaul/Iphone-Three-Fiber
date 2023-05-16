import React from 'react'

export const Colors = () => {
  return (
    <>
      <p className="text-xl font-semibold my-5">Color</p>
      <div className="flex gap-3">
        <span className="bg-red-600 w-8 h-8 rounded-full"></span>
        <span className="bg-cyan-800 w-8 h-8 rounded-full"></span>
        <span className="bg-black w-8 h-8 rounded-full"></span>
        <span className="bg-white border w-8 h-8 rounded-full"></span>
        <span className="bg-emerald-300 w-8 h-8 rounded-full"></span>
      </div>
    </>
  )
}
