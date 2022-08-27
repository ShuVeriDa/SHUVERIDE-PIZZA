import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {PizzaBlock} from "./components/PizzaBlock";
import {Sort} from "./components/Sort";

export type PizzaType = {
   id: number,
   imageUrl: string,
   title: string,
   types: number[],
   sizes: number[],
   price: number,
   category: number,
   rating: number
}

function App() {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('https://630a32f93249910032824d12.mockapi.io/items')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
         })
   }, [])

   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <div className="container">
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
         </div>
      </div>
   );
}

export default App;
