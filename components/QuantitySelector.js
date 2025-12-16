'use client'
import React from 'react'
import { Increment , Decrement } from '@/app/redux/addcart/cartslice'
import { useDispatch } from 'react-redux'

const QuantitySelector = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div>
                <button onClick={()=> dispatch(Decrement(item.id))}>-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => dispatch(Increment(item.id))}>+</button>
            
        </div>
    )
}

export default QuantitySelector
