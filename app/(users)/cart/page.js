'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import QuantitySelector from "@/components/QuantitySelector";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { cartLengthContext } from "@/app/context/context";
import Script from "next/script";

export default function CartPage() {

  const [data, setData] = useState({
    items: [],
    totalAmount: 0,
    deliveryCharges: 0
  })

  const { setCartlength } = useContext(cartLengthContext)

  const totalPrice = (data?.items || []).reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalOriginal = (data?.items || []).reduce((acc, item) => acc + (item.price + 250) * item.quantity, 0);
  const totalDiscount = totalOriginal - totalPrice;
  const totalAmount = totalPrice + data.deliveryCharges


  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch('/api/cart', {
          method: 'GET',
          credentials: 'include'
        })
        const body = await res.json()
        if (!body.items) {
          setData({
            items: [],
            totalAmount: 0,
            deliveryCharges: 0
          })
        } else {
          setData(body)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCart()
  }, [])

  const updateQuantity = async (id, quantity) => {
    try {
      const res = await fetch("/api/cart", {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id, quantity })
      })
      const updatedCart = await res.json()
      setData(updatedCart)
      setCartlength(updatedCart.items.length)
    } catch (err) {
      console.error(err)
    }
  }

  const DeleteCart = async (id) => {
    try {
      const res = await fetch("/api/cart", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id })
      })
      const DeletedCart = await res.json()
      setData(DeletedCart)
      setCartlength(DeletedCart.items.length)
    } catch (err) {
      console.error(err)
    }
  }

  const createOrder = async () => {
    const res = await fetch('/api/createOrders', {
      method: 'POST',
      body: JSON.stringify({ amount: totalAmount * 100 })
    })
    const data = await res.json()

    const paymentData = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      order_id: data.id,

      handler: async function (res) {
        // verification of payment
      }
    }
    const payment = new window.Razorpay(paymentData)
    payment.open()
  }

  return (
    <>
      <Navbar />
      <Script
        src='https://checkout.razorpay.com/v1/checkout.js'
        strategy="lazyOnload"
      ></Script>
      {data.items.length > 0 ? <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <section className="lg:col-span-2 space-y-4">
          {data.items.map(item => (
            <div key={item._id} className="border rounded-lg p-4 flex gap-4">

              <Image
                src={item.imageUrl?.[0] || "/placeholder.png"}
                alt={item.name || 'Mens'}
                width={100}
                height={120}
                className="object-contain"
                style={{ width: '100px', height: 'auto' }}
                priority={true}
              />

              <div className="flex-1 space-y-2">
                <h3 className="font-medium line-clamp-2">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-lg font-semibold">${Number(item.price * item.quantity).toFixed(2)}</span>
                  <span className="line-through text-gray-400"> ${(item.price + 250).toFixed(2)}</span>
                  <span className="text-green-600 font-semibold">{(() => {
                    const originalPrice = item.price + 250;
                    const discountedPrice = item.price;
                    const discountPercent =
                      ((originalPrice - discountedPrice) / originalPrice) * 100;

                    return (
                      <span className="text-green-600 font-semibold">
                        {discountPercent.toFixed(0)}% off
                      </span>
                    );
                  })()}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-center border-2 rounded-md overflow-hidden min-w-[100px]">
                    <QuantitySelector item={item} onUpdate={updateQuantity} />
                  </div>
                  <span className="text-sm text-red-600 font-medium cursor-pointer" onClick={() => DeleteCart(item._id)}>Remove</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <aside className="border rounded-lg p-5 h-fit sticky top-24">
          <h2 className="font-semibold text-gray-700 mb-4">PRICE DETAILS</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Price ({data.items.length} items)</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ${totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">${data.deliveryCharges}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-green-600 text-sm mt-4">
            You will save ${totalDiscount.toFixed(2)} on this order
          </p>
          <div className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-6 text-center cursor-pointer" onClick={() => { createOrder() }}>
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
        <Link href="/" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
          Continue Shopping
        </Link>
      </div>}
    </>
  );
}
