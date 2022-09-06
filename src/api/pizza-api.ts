import axios from "axios";
import {PizzaType} from "../redux/slices/pizzaSlice";
import {SortType} from "../redux/slices/filterSlice";

const instance = axios.create({
   baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


//api
export const pizzasAPI = {
   getPizzas: (params: SearchPizzasParamsType) => {
      return instance.get<PizzaType[]>(`items?page=${params.currentPage}&limit=4&${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
   },
   // getSelectedPizza: (id: string) => {
   //    return instance.get(`items/${id}`, {})
   // }
}

export type SearchPizzasParamsType = {
   currentPage: number, category: string, sortBy: string, order: string, search: string,
}


