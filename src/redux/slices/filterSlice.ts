import {createSlice} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
   categoryId: 0,
   sort: {
      name: 'популярности',
      sortProperty: 'rating',
   }
}

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId: (state, action) => {
         state.categoryId = action.payload
      },
      setSort: (state, action) => {
         state.sort = action.payload
      }
   }
})

export const {setCategoryId, setSort} = filterSlice.actions
export const filterReducer = filterSlice.reducer

//types
export type InitialStateType = {
   categoryId: number,
   sort: {
      name: string,
      sortProperty: string,
   }
}