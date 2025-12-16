'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '@/app/redux/addcart/cartslice'

const AddtoCart = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer" onClick={() =>  dispatch(addItem(product))}>
                Add to Cart
            </button>
        </div>
    )
}

export default AddtoCart
