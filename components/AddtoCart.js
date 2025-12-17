'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/app/redux/addcart/cartslice'
import { toast } from 'react-toastify'

const AddtoCart = ({ product }) => {
    const dispatch = useDispatch()
    const SelectedSize = useSelector(state => state.size.SelectedSize)

    function handleCart() {
        if (!SelectedSize) {
            toast.error('please select the size')
            return
        }
        dispatch(addItem({ ...product, size: SelectedSize }))
    }
    return (
        <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer" onClick={() => handleCart()}>
                Add to Cart
            </button>
        </div>

    )
}

export default AddtoCart
