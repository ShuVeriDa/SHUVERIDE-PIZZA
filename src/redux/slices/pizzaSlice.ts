import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {SearchPizzasParamsType, pizzasAPI} from "../../api/pizza-api";
import {RootState} from "../store";

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
}

const initialState: InitialStateType = {
   items: [],
   status: Status.LOADING
}

export const fetchPizzasTC = createAsyncThunk<PizzaType[], SearchPizzasParamsType>('pizza/fetchPizzasStatus', async (param) => {
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
            state.status = Status.LOADING
            state.items = []
         })
         .addCase(fetchPizzasTC.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
         })
         .addCase(fetchPizzasTC.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
         })
   }

})

export const selectPizzaData = (state: RootState) => state.pizza


export const {} = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer

//types
interface InitialStateType {
   items: PizzaType[]
   status: Status
}

//types
export type PizzaType = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
   rating: number;
   count: number
}