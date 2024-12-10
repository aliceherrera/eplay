import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type cartState = {
  itens: Game[]
  isOpen: boolean
}

const initialState: cartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.itens.find((item) => item.id === action.payload.id)
      if (!game) {
        state.itens.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
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
    },
    clear: (state) => {
      state.itens = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
