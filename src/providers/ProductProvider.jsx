import React, { useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'

export const ProductProvider = ({children}) => {
  const [colorState,setColorState] = useState('0xFC3434')
  return (
    <ProductContext.Provider value={{
      colorState,
      setColorState
    }}>
      {children}
    </ProductContext.Provider>
  )
}
