import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {

      const existingItem = state.items.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity +=1
      } else {
        state.items.push({...action.payload , quantity:1})
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart: (state, action) => {
      state.items = []
    },
    Increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    Decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity -= 1
      }
    },
  },
})

export const Selectcartcount = (state) => state.cart.items.length

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart, Increment, Decrement } = cartSlice.actions

export default cartSlice.reducer