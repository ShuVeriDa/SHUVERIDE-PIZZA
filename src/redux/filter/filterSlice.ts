import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceStateType, SortPropertyEnum, SortType} from "./filterTypes";

const initialState: FilterSliceStateType = {
   categoryId: 0,
   currentPage: 1,
   searchValue: '',
   sort: {
      name: 'популярности',
      sortProperty: SortPropertyEnum.RATING_DESK,
   }
}

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload
      },
      setSort: (state, action: PayloadAction<SortType>) => {
         state.sort = action.payload
      },
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload
      },
      setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
            state.sort.sortProperty = action.payload.sort.sortProperty
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)

      },
      setSearchValue: (state, action: PayloadAction<string>) => {
         state.searchValue = action.payload
      }
   }
})

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions
export const filterReducer = filterSlice.reducer

