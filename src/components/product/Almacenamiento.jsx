import React from 'react'

export const Almacenamiento = () => {
  return (
    <div>
      <p className="text-2xl font-semibold my-10">Almacenamiento. <span className="text-gray-400">¿Cuánto almacenamiento necesitas?</span></p>
      <div className="flex flex-col gap-3">
        <div className="px-4 py-6 rounded-xl border border-gray-400">
          <span className="flex justify-between items-center">
            <span className="font-semibold">64 GB<sup className='text-gray-400'>2</sup></span>
            <span className="text-gray-500 text-xs">$14,999</span>
          </span>
        </div>
        <div className="px-4 py-6 rounded-xl border border-gray-400">
          <span className="flex justify-between items-center">
            <span className="font-semibold">128 GB<sup className='text-gray-600'>2</sup></span>
            <span className="text-gray-600 text-xs">$16,499.00</span>
          </span>
        </div>
        <div className="px-4 py-6 rounded-xl border border-gray-400">
          <span className="flex justify-between items-center">
            <span className="font-semibold">256 GB<sup className='text-gray-600'>2</sup></span>
            <span className="text-gray-600 text-xs">$19,499.00</span>
          </span>
        </div>
      </div>
    </div>
  )
}
