'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/addcart/cartslice";
import QuantitySelector from "@/components/QuantitySelector";
import Link from "next/link";
import { useState , useEffect} from "react";

export default function CartPage() {
 

  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const SelectedSize = useSelector(state => state.size.SelectedSize)


  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalOriginal = cart.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const totalDiscount = totalOriginal - totalPrice;

  
  return (
    <>
      <Navbar />
      {cart.length !== 0 ? <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <section className="lg:col-span-2 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 flex gap-4">

              <Image
                src={item.image || "/placeholder.png"}
                alt={item.name || 'Mens'}
                width={100}
                height={120}
                className="object-contain"
                style={{ width: '100px', height: 'auto' }}
                priority={true}
              />

              <div className="flex-1 space-y-2">
                <h3 className="font-medium line-clamp-2">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {SelectedSize}</p>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">${Number(item.price).toFixed(2)}</span>
                  <span className="line-through text-gray-400">$85</span>
                  <span className="text-green-600 font-semibold">44% off</span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center border-2 rounded-md overflow-hidden">
                    <QuantitySelector item={item} />
                  </div>
                  <span className="text-sm text-red-600 font-medium cursor-pointer" onClick={() => dispatch(removeItem(item.id))}>Remove</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <aside className="border rounded-lg p-5 h-fit sticky top-24">
          <h2 className="font-semibold text-gray-700 mb-4">PRICE DETAILS</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Price ({cart.length} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>−44% of</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-green-600 text-sm mt-4">
            You will save ₹{totalDiscount} on this order
          </p>
          <div className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-6 text-center">
            PLACE ORDER
          </div>
        </aside>
      </main> : <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div><i className="fa-solid fa-dolly text-6xl mb-3"></i></div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
          Continue Shopping
        </Link>
      </div>}
    </>
  );
}
