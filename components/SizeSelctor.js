'use client'

import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { SetSize } from '@/app/redux/Sizeselect/sizeslice'

const SizeSelctor = () => {
 
  const dispatch = useDispatch()
   const SelectedSize = useSelector(state => state.size.SelectedSize)

  const Sizes = ["S", "M", "L", "XL", "XXL"]
  return (
    <div>
      <div className="flex gap-3">
                {Sizes.map(Size => (
                  <button key={Size} className={`border px-4 py-2 rounded hover:border-black font-medium cursor-pointer  ${SelectedSize === Size ? 'bg-green-500' : ''}`} value={SelectedSize} onClick={() => dispatch(SetSize(Size))}>
                    {Size}
                  </button>
                ))}
              </div>
              {<p className='mt-2'>Selected Size : {SelectedSize || 'Select your Size'}</p>}
    </div>
  )
}

export default SizeSelctor
