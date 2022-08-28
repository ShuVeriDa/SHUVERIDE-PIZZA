import React, {useEffect, useState} from "react";
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {PizzaType} from "../App";
import {Skeleton} from "../components/PizzaBlock/Skeleton";

export const Main = () => {
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState<boolean>(true)
   const array = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

   useEffect(() => {
      fetch('https://630a32f93249910032824d12.mockapi.io/items')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
            setLoading(false)
         })
   }, [])
   return (
      <div>
         <div className="contentTop">
            <Categories/>
            <Sort/>
         </div>
         <h2 className="contentTitle">Все пиццы</h2>
         <div className="contentItems">
            {loading
               ? array.map((_, index) => <Skeleton key={index}/>)
               : items.map((obj: PizzaType) => (
                  <PizzaBlock key={obj.id} {...obj}/>
               ))
            }
         </div>
      </div>
   );
};
