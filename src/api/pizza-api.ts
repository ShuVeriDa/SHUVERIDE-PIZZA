import axios from "axios";

const instance = axios.create({
   baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


//api
export const pizzasAPI = {
   getPizzas: (params: getPizzasParamsType) => {
      return instance.get(`items?page=${params.currentPage}&limit=4&${params.category}&sortBy=${params.sortBy}&order=${params.order}&${params.search}`)
   }
}

export type getPizzasParamsType = {
   currentPage: number, category: string, sortBy: string, order: string, search: string,
}
