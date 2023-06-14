import React from 'react'
import { PlusIcon } from '../../assets/PlusIcon'

export const ProductHeader = () => {
  return (
    <div className="flex md:justify-between justify-center flex-wrap gap-5">
      <div>
        <h1 className="text-5xl font-semibold md:text-left text-center">Compra el iPhone 12</h1>
        <p className="text-sm mt-5 md:text-left text-center">Desde $14,999</p>
      </div>
      <div className="text-gray-600">
        <a href="#" className="text-xs bg-gray-100 px-8 py-2 rounded-full flex gap-1 items-center">Pagos mensuales <PlusIcon /> </a>
      </div>
    </div>
  )
}
