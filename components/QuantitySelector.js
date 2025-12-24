'use client'
import React from 'react'

const QuantitySelector = ({ item , onUpdate }) => {
    return (
        <div>
            <button className='cursor-pointer border-r-2 pl-3 pr-3' disabled= {item.quantity <= 1} onClick={() => onUpdate(item._id, item.quantity - 1) }>-</button>
            <span className="m-3 text-[15px]">{item.quantity}</span>
            <button className='cursor-pointer border-l-2 pl-3 pr-3' onClick={() => onUpdate(item._id, item.quantity + 1) }>+</button>

        </div>
    )
}

export default QuantitySelector
