import React, { useState } from 'react'
import {PlusIcon} from '../assets/PlusIcon'
import { IphoneScene } from '../scenes/IphoneScene';
import { Colors } from './Colors';
import { Almacenamiento } from './Almacenamiento';


export const IphoneView = () => {
  const [colorBack,setColorBack] = useState('0xFC3434')
  return (
      <>
      <div className="container w-11/12 m-auto my-8 px-6">
        <div className="flex md:justify-between justify-center flex-wrap gap-5">
          <div>
            <h1 className="text-5xl font-semibold md:text-left text-center">Compra el iPhone 12</h1>
            <p className="text-sm mt-5 md:text-left text-center">Desde $14,999</p>
          </div>
          <div className="text-gray-600">
            <a href="#" className="text-xs bg-gray-100 px-8 py-2 rounded-full flex gap-1 items-center">Pagos mensuales <PlusIcon /> </a>
          </div>
        </div>
        <div className="flex flex-wrap md:gap-0 gap-10">

            <div className="md:w-9/12 w-full h-[35rem] md:pr-10">
              <IphoneScene colorBack={colorBack} />
            </div>
            <div className="md:w-3/12 w-full flex items-center px-2">
              <div >
                <p className="text-2xl font-semibold">Acabado. <span className="text-gray-400">Elige tu favorito.</span></p>
                <Colors setColorBack={setColorBack} colorBack={colorBack}/>
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
