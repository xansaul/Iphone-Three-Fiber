import React, { useState } from 'react'
import { IphoneScene } from '../../scenes/IphoneScene';
import { ProductHeader } from '../product/ProductHeader';
import { SideInfoProduct } from '../product/SideInfoProduct';
import { ProductProvider } from '../../providers/ProductProvider';


export const IphonePage = () => {
  return (
      <ProductProvider>
      <div className="container w-11/12 m-auto my-8 px-6">
        <ProductHeader />
        <div className="flex flex-wrap md:gap-0 gap-10">
            <div className="md:w-9/12 w-full h-[35rem] md:pr-10">
              <IphoneScene />
            </div>
            <div className="md:w-3/12 w-full flex items-center px-2">
              <SideInfoProduct />
            </div>
          </div>
        </div>
      </ProductProvider>
  );
}
