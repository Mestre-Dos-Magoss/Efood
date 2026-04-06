import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  itens: MenuItens[]
  isOpen: boolean
  step: 'cart' | 'delivery' | 'payment'
}

const initialState: CartState = {
  itens: [],
  isOpen: false,
  step: 'cart'
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
    clear: (state) => {
      state.itens = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    goToCart: (state) => {
      state.step = 'cart'
    },
    goToDelivery: (state) => {
      state.step = 'delivery'
    },
    goToPayment: (state) => {
      state.step = 'payment'
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  goToCart,
  goToDelivery,
  goToPayment,
  clear
} = cartSlice.actions
export default cartSlice.reducer
