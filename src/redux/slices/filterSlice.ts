import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState: InitialStateType = {
   categoryId: 0,
   currentPage: 1,
   searchValue: '',
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
      },
      setFilters: (state, action) => {
         state.sort.sortProperty = action.payload.currentPage
         state.currentPage = Number(action.payload.currentPage)
         state.categoryId = Number(action.payload.categoryId)
      },
      setSearchValue: (state, action) => {
         state.searchValue = action.payload
      }
   }
})

export const selectSort = (state: RootState) => state.filter

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions
export const filterReducer = filterSlice.reducer

//types
export type InitialStateType = {
   categoryId: number
   currentPage: number
   searchValue: string
   sort: {
      name: string
      sortProperty: string
   }
}