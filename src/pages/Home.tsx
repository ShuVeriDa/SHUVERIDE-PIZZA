import React, {FC, useContext, useEffect, useState} from "react";

import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {PizzaType, SearchContext} from "../App";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {Pagination} from "../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {setCategoryId} from "../redux/slices/filterSlice";

type HomePropsType = {

}

export type SortType = {
   name: string,
   sortProperty: string,
}

export const Home: FC<HomePropsType> = () => {
   const categoryId = useAppSelector(state => state.filter.categoryId)
   const dispatch = useDispatch<AppDispatchType>()

   const [items, setItems] = useState<PizzaType[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const [currentPage, setCurrentPage] = useState<number>(1)
   const [sortType, setSortType] = useState<SortType>({
      name: 'популярности',
      sortProperty: 'rating',
   })

   const {searchValue} = useContext(SearchContext)

   const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
   const skeleton = array.map((_, index) => <Skeleton key={index}/>)
   const pizzas = items.map((obj) => (
         <PizzaBlock key={obj.id} {...obj}/>
      ))

   useEffect(() => {
      setIsLoading(true)

      const sortBy = sortType.sortProperty.replace('-', '')
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const search = searchValue ? `&search=${searchValue}` : ''

      fetch(`https://630a32f93249910032824d12.mockapi.io/items?page=${currentPage}&limit=4&${category}sortBy=${sortBy}${search}&order=${order}`,)
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
            setIsLoading(false)
         })
      window.scroll(0, 0)
   }, [categoryId, sortType, searchValue, currentPage])

   const onClickCategory = (categoryId: number) => {
      dispatch(setCategoryId(categoryId))
   }

   return (
      <div className='container'>
         <div className="contentTop">
            <Categories categoryID={categoryId} onClickCategory={onClickCategory}/>
            <Sort sortType={sortType} onClickSort={(sortType: SortType) => setSortType(sortType)}/>
         </div>
         <h2 className="contentTitle">Все пиццы</h2>
         <div className="contentItems">
            {isLoading ? skeleton : pizzas}
         </div>
         <Pagination onChangePage={(number: number) => setCurrentPage(number)}/>
      </div>
   );
};
