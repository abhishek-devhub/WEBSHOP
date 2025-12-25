'use client'

import React from 'react'
import { useState , useEffect } from 'react'
import { cartLengthContext } from './context'

const CartProvider = ({children}) => {
    const [cartLength, setCartlength] = useState(0)

    useEffect(() => {
      async function fetchLength() {
        try {
            const res = await fetch('/api/cart')
            const data = await res.json()
            setCartlength(data.items.length)
        } catch (error) {
            console.log(error)
        }
      }
      fetchLength()
    }, [])
    

  return (
    <div>
      <cartLengthContext.Provider value={{cartLength , setCartlength}}>
        {children}
      </cartLengthContext.Provider>
    </div>
  )
}

export default CartProvider
