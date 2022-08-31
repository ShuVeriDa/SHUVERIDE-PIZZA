import {createSlice} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
   categoryId: 0,
   currentPage: 1,
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
      },
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload
      }
   }
})

export const {setCategoryId, setSort, setCurrentPage} = filterSlice.actions
export const filterReducer = filterSlice.reducer

//types
export type InitialStateType = {
   categoryId: number
   currentPage: number
   sort: {
      name: string
      sortProperty: string
   }
}