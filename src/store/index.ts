import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducers/cart'
import deliverySlice from './reducers/delivery'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    deliverySlice: deliverySlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
