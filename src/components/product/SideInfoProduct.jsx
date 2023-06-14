import React from 'react'
import { Almacenamiento } from './Almacenamiento'
import { Colors } from './Colors'

export const SideInfoProduct = () => {
  return (
    <div >
      <p className="text-2xl font-semibold">Acabado. <span className="text-gray-400">Elige tu favorito.</span></p>
      <Colors />
      <p className="block py-4 text-xs mt-5 text-gray-400">
        Una parte de lo recaudado con la venta de un iPhone 12 (PRODUCT)RED se destinará al Fondo Mundial frente al COVID-19. Nota a pie de página<sup>◊◊◊</sup> 
      </p>
      <Almacenamiento />
    </div>
  )
}
