'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/app/redux/addcart/cartslice'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { cartLengthContext } from "@/app/context/context";

const AddtoCart = ({ product }) => {
    const { name, imageUrl, price } = product
    const quantity = product.quantity || 1
    const {setCartlength} = useContext(cartLengthContext)

    const dispatch = useDispatch()
    const SelectedSize = useSelector(state => state.size.SelectedSize)
    const { data: session, status } = useSession()

    async function handleCart() {
        if (!SelectedSize) {
            toast.error('please select the size')
            return
        }
        if (status !== 'authenticated') {
            toast.error('Please Login First')
        }
        const res = await fetch('/api/cart', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId: product._id, name, image: imageUrl[0], size: SelectedSize, price, quantity})
        })
        if (res.ok) {
            toast('Added To Cart')
            dispatch(addItem({ ...product, size: SelectedSize }))
            setCartlength(prev => prev + 1)
        } else {
            toast.error("Error")
        }
    }
    return (
        <div className="w-full">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer" onClick={() => handleCart()}>
                Add to Cart
            </button>
        </div>
    )
}

export default AddtoCart
