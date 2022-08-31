import axios from "axios";

const instance = axios.create({
   baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


//api
export const pizzasAPI = {
   getPizzas: (currentPage: number, sortBy: string, category: string, search: string, order: string) => {
      return instance.get(`items?page=${currentPage}&limit=4&${category}sortBy=${sortBy}${search}&order=${order}`)
   }
}