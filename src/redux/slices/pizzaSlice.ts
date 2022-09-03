import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzaType} from "../../App";
import {getPizzasParamsType, pizzasAPI} from "../../api/pizza-api";

const initialState: InitialStateType = {
   items: [],
   status: 'idle'
}

export const fetchPizzasTC = createAsyncThunk<PizzaType[], getPizzasParamsType>('pizza/fetchPizzasStatus', async (param, thunkAPI) => {
      const res = await pizzasAPI.getPizzas(param)
      return res.data
})

export const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchPizzasTC.pending, (state) => {
            state.status = 'loading'
            state.items = []
         })
         .addCase(fetchPizzasTC.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
         })
         .addCase(fetchPizzasTC.rejected, (state) => {
            state.status = 'error'
            state.items = []
         })
   }

})

export const {} = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer

//types
export type InitialStateType = {
   items: PizzaType[]
   status: RequestStatusType
}

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'error'