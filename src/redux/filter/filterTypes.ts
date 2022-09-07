//types

export interface FilterSliceStateType {
   categoryId: number
   currentPage: number
   searchValue: string
   sort: SortType
}

export enum SortPropertyEnum {
   RATING_DESK = "rating",
   RATING_ASC = "-rating",
   TITLE_DESK = "title",
   TITLE_ASC = "-title",
   PRICE_DESK = "price",
   PRICE_ASC = "-price",
}

export type SortType = {
   name: string
   sortProperty: SortPropertyEnum
}