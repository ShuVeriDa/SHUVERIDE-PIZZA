import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCartFromLocalStorage} from "../../utils/getCartFromLocalStorage";
import {calcTotalPrice} from "../../utils/calcTotalPrice";
import {CartItemType, CartSliceStateType} from "./cartTypes";

const {items, totalPrice} = getCartFromLocalStorage()

const initialState: CartSliceStateType = {
   items: items,
   totalPrice: totalPrice,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem: (state, action: PayloadAction<CartItemType>) => {
         const findItem = state.items.find(item => item.id === action.payload.id)

         if (findItem) {
            findItem.count++
         } else {
            state.items.push({
               ...action.payload,
               count: 1
            })
         }

         state.totalPrice = calcTotalPrice(state.items)
      },
      minusItem: (state, action: PayloadAction<string>) => {
         const findItem = state.items.find(item => item.id === action.payload)

         if (findItem) {
            findItem.count--
         }

         state.totalPrice = calcTotalPrice(state.items)
      },
      removeItems: (state, action: PayloadAction<string>) => {
         state.items = state.items.filter(p => p.id !== action.payload)

         state.totalPrice = calcTotalPrice(state.items)
      },
      clearItems: (state, action) => {
         state.items = []
         state.totalPrice = 0
      }
   }
})

export const {addItem, removeItems, clearItems, minusItem} = cartSlice.actions
export const cartReducer = cartSlice.reducer

