import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export enum SortPropertyEnum {
   RATING_DESK = "rating",
   RATING_ASC= "-rating",
   TITLE_DESK = "title",
   TITLE_ASC= "-title",
   PRICE_DESK = "price",
   PRICE_ASC= "-price",
}

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

export const selectSort = (state: RootState) => state.filter

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions
export const filterReducer = filterSlice.reducer

//types
export interface FilterSliceStateType {
   categoryId: number
   currentPage: number
   searchValue: string
   sort: SortType
}



export type SortType = {
   name: string
   sortProperty: SortPropertyEnum
}