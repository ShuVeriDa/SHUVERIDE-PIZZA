import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pizzasAPI, SearchPizzasParamsType} from "../../api/pizza-api";
import {InitialStateType, PizzaType, Status} from "./pizzaTypes";

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


// export const {} = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer

