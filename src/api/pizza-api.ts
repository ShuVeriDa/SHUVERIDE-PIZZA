import axios from "axios";

const instance = axios.create({
   baseURL: 'https://630a32f93249910032824d12.mockapi.io/'
})


//api
export const pizzasAPI = {
   getPizzas: (currentPage: number, category: string, sortBy: string, order: string, search: string,) => {
      return instance.get(`items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`)
   }
}