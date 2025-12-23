'use client'

import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { SetSize } from '@/app/redux/Sizeselect/sizeslice'

const SizeSelctor = ({product}) => {
  
  const dispatch = useDispatch()
   const SelectedSize = useSelector(state => state.size.SelectedSize)
   
  return (
    <div>
      <div className="flex gap-3">
                {product.sizes.map(Size => (
                  <button key={Size} className={`border px-4 py-2 rounded hover:border-black font-medium cursor-pointer  ${SelectedSize === Size ? 'bg-green-500' : ''}`} value={SelectedSize} onClick={() => dispatch(SetSize(Size))}>
                    {Size}
                  </button>
                ))}
              </div>
    </div>
  )
}

export default SizeSelctor
