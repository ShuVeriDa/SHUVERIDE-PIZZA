import React, {useEffect, useState} from "react";
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {PizzaBlock} from "../components/PizzaBlock";
import {PizzaType} from "../App";

export const Main = () => {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('https://630a32f93249910032824d12.mockapi.io/items')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
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
            {items.map((obj: PizzaType, index) => (
               <PizzaBlock key={obj.id} {...obj}/>
            ))}
         </div>
      </div>
   );
};
