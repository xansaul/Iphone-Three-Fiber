import React from 'react'
import { SearchIcon } from '../assets/SearchIcon'
import { BagIcon } from '../assets/BagIcon'

export const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-center gap-10 text-xs p-4 text-gray-600 items-center font-semibold flex-wrap'>
        <li>Tienda</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV y Casa</li>
        <li>Entetenimiento</li>
        <li>Accesorios</li>
        <li>Soporte</li>
        <SearchIcon />
        <BagIcon />
      </ul>
    </nav>
  )
}
