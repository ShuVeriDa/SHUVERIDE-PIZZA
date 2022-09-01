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
      // addItem: (state, action) => {
      //    state.items.push(action.payload)
      //    state.totalPrice = state.items.reduce((sum, obj) => {
      //       return obj.price + sum
      //    }, 0)
      // },
      addItem: (state, action) => {
         const findItem = state.items.find(item => item.id === action.payload.id)

         findItem
            ? findItem.count++
            : state.items.push({
               ...action.payload,
               count: 1
            })

         state.totalPrice = state.items.reduce((sum, obj) => {
            console.log(obj.price)
            return obj.price * obj.count + sum
         }, 0)
      },
      removeItems: (state, action) => {
         state.items = state.items.filter(p => p.id !== action.payload)
      },
      clearItems: (state, action) => {
         state.items = []
      }
   }
})

export const {addItem, removeItems, clearItems} = cartSlice.actions
export const cartReducer = cartSlice.reducer

//types
export type InitialStateType = {
   totalPrice: number,
   items: PizzaType[]
}