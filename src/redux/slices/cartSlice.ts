import {createSlice} from "@reduxjs/toolkit";
import {PizzaType} from "../../App";

const initialState: InitialStateType = {
   items: [],
   totalPrice: 0,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem: (state, action) => {
         const findItem = state.items.find(item => item.id === action.payload.id)

         if (findItem) {
            findItem.count++
         } else {
            state.items.push({
               ...action.payload,
               count: 1
            })
         }

         state.totalPrice = state.items.reduce((sum, obj) => {
            return obj.price * obj.count + sum
         }, 0)
      },
      minusItem: (state, action) => {
         const findItem = state.items.find(item => item.id === action.payload)

         if (findItem) {
            findItem.count--
         }

         state.totalPrice = state.items.reduce((sum, obj) => {
            return obj.price * obj.count + sum
         }, 0)
      },
      removeItems: (state, action) => {
         state.items = state.items.filter(p => p.id !== action.payload)
      },
      clearItems: (state, action) => {
         state.items = []
         state.totalPrice = 0
      }
   }
})

export const {addItem, removeItems, clearItems, minusItem} = cartSlice.actions
export const cartReducer = cartSlice.reducer

//types
export type InitialStateType = {
   totalPrice: number,
   items: PizzaType[]
}