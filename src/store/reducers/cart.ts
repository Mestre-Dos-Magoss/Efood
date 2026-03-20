import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MenuItens } from '../../types/menuItens'

type CartState = {
  itens: MenuItens[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItens>) => {
      const existIten = state.itens.find(
        (item) => item.id === action.payload.id
      )

      if (existIten) {
        alert('Você já possuí este item no carrinho.')
      } else {
        state.itens.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
