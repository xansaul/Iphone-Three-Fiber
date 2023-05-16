import React from 'react'
import {PlusIcon} from '../assets/PlusIcon'
import { IphoneScene } from '../scenes/IphoneScene';
import { Colors } from './Colors';
import { Almacenamiento } from './Almacenamiento';


export const IphoneView = () => {
  return (
      <>
      <div className="container w-11/12 m-auto my-8 px-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl font-semibold">Compra el iPhone 12</h1>
            <p className="text-sm mt-2">Desde $14,999</p>
          </div>
          <div className="text-gray-600">
            <a href="#" className="text-xs bg-gray-100 px-8 py-2 rounded-full flex gap-1 items-center">Pagos mensuales <PlusIcon /> </a>
          </div>
        </div>
        <div className="flex mt-10 gap-10">
          <div className="w-9/12 h-[35rem]">
            <IphoneScene />
          </div>
          <div className="w-3/12 flex items-center px-2">
            <div >
              <p className="text-2xl font-semibold">Acabado. <span className="text-gray-400">Elige tu favorito.</span></p>
              <Colors/>
              <p className="block py-4 text-xs mt-5 text-gray-400">
                Una parte de lo recaudado con la venta de un iPhone 12 (PRODUCT)RED se destinará al Fondo Mundial frente al COVID-19. Nota a pie de página<sup>◊◊◊</sup> 
              </p>
              <Almacenamiento />
              </div>
            </div>
          </div>
        </div>
    
      </>
  );
}
