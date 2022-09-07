import React, {FC, useCallback, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import qs from "qs";

import {Categories} from "../components/Categories";
import {sortList, SortPopup} from "../components/SortPopup";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {Pagination} from "../components/Pagination/Pagination";
import {AppDispatchType, useAppSelector} from "../redux/store";
import {setCategoryId, setCurrentPage, setFilters} from "../redux/filter/filterSlice";
import {fetchPizzasTC} from "../redux/pizza/pizzaSlice";
import {SearchPizzasParamsType} from "../api/pizza-api";
import {selectSort} from "../redux/filter/filterSelectors";
import {selectPizzaData} from "../redux/pizza/PizzaSelectors";

type HomePropsType = {}

export const Home: FC<HomePropsType> = () => {
   const {categoryId, sort, currentPage, searchValue} = useAppSelector(selectSort)
   const {items, status} = useAppSelector(selectPizzaData)

   const dispatch = useDispatch<AppDispatchType>()
   const isSearch = useRef(false)
   const isMounted = useRef(false)
   const navigate = useNavigate()

   const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

   const getPizzas = () => {
      const sortBy = sort.sortProperty.replace('-', '')
      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const search = searchValue ? `search=${searchValue}` : ''

      dispatch(fetchPizzasTC({currentPage, category, sortBy, order, search}))
   }

// Если изменили параметры и был первый рендер
   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortProperty: sort.sortProperty,
            categoryId,
            currentPage
         })

         navigate(`?${queryString}`)
      }
      isMounted.current = true
   }, [categoryId, sort.sortProperty, currentPage])

   //Если был первый рендер, то проверяем URL - параметры и сохраняем в редаксе
   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzasParamsType
         const sort = sortList.find((obj) => obj.sortProperty === params.sortBy)

         dispatch(setFilters({
               searchValue: params.search,
               categoryId: Number(params.category),
               currentPage: params.currentPage,
               sort: sort || sortList[0],
            })
         )
         isSearch.current = true
      }
   }, [])
   // Если был первый рендер, то запрашиваем пиццы
   useEffect(() => {
      window.scrollTo(0, 0)

      if (!isSearch.current) {
         getPizzas()
      }

      isSearch.current = false
   }, [categoryId, sort.sortProperty, currentPage])


   const onClickCategory = useCallback((categoryId: number) => {
      dispatch(setCategoryId(categoryId))
   }, [])

   const onChangePage = (page: number) => {
      dispatch(setCurrentPage(page))
   }

   const skeleton = array.map((_, index) => <Skeleton key={index}/>)
   const pizzas = items.map((obj) => <PizzaBlock key={obj.id}  {...obj}/>)

   return (
      <div className='container'>
         <div className="contentTop">
            <Categories categoryID={categoryId} onClickCategory={onClickCategory}/>
            <SortPopup sort={sort}/>
         </div>
         <h2 className="contentTitle">Все пиццы</h2>
         {status === "error"
            ? <div className="contentErrorInfo">
               <h2>Произошла ошибка</h2>
               <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
            </div>
            : <div className="contentItems">{status === 'loading' ? skeleton : pizzas}</div>
         }
         <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
      </div>
   );
};
