import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './addcart/cartslice'
import SizeReducer from './Sizeselect/sizeslice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    size:SizeReducer
  },
})


export default store;