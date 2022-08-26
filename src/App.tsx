import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {PizzaBlock} from "./components/PizzaBlock";
import {Sort} from "./components/Sort";
import pizzas from './assets/db.json'

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
                  {pizzas.pizzas.map((obj: PizzaType, index) => (
                     <PizzaBlock key={index} {...obj}/>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
