import React, {useEffect, useState} from "react";
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {PizzaType} from "../App";
import {Skeleton} from "../components/PizzaBlock/Skeleton";

export type SortType = {
   name: string,
   sortProperty: string,
}

export const Home = () => {
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const [categoryId, setCategoryId] = useState<number>(0)
   const [sortType, setSortType] = useState<SortType>({
      name: 'популярности',
      sortProperty: 'rating',
   })
   const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

   useEffect(() => {
      setIsLoading(true)

      const sortBy = sortType.sortProperty.replace('-', '')
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
      const category = categoryId > 0 ? `category=${categoryId}` : ''

      fetch(`https://630a32f93249910032824d12.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,)
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
            setIsLoading(false)
         })
      window.scroll(0, 0)
   }, [categoryId, sortType])

   return (
      <div className='container'>
         <div className="contentTop">
            <Categories categoryID={categoryId} onClickCategory={(index: number) => setCategoryId(index)}/>
            <Sort sortType={sortType} onClickSort={(sortType: SortType) => setSortType(sortType)}/>
         </div>
         <h2 className="contentTitle">Все пиццы</h2>
         <div className="contentItems">
            {isLoading
               ? array.map((_, index) => <Skeleton key={index}/>)
               : items.map((obj: PizzaType) => (
                  <PizzaBlock key={obj.id} {...obj}/>
               ))
            }
         </div>
      </div>
   );
};
