import axios from "axios";
import {SortType} from "../redux/filter/filterTypes";
import {PizzaType} from "../redux/pizza/pizzaTypes";

const instance = axios.create({
   baseURL: process.env.REACT_APP_API_URL
     || 'https://630a32f93249910032824d12.mockapi.io/items'
})



//api
export const pizzasAPI = {
   getPizzas: (params: SearchPizzasParamsType) => {
      return instance.get<PizzaType[]>(`?page=${params.currentPage}&limit=4&${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
   },
   // getSelectedPizza: (id: string) => {
   //    return instance.get(`items/${id}`, {})
   // }
}

export type SearchPizzasParamsType = {
   currentPage: number, category: string, sortBy: string, order: string, search: string,
}


