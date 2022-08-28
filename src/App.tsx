import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
import {Sort} from "./components/Sort";
import {Main} from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {Cart} from "./pages/Cart";

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
               <Routes>
                  <Route path={'/'} element={<Main />} />
                  <Route path={'/cart'} element={<Cart />} />
                  <Route path={'*'} element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
