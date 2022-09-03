import React, {createContext, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
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
   count: number
}

function App() {
   return (
      <div className="wrapper">
            <Header/>
            <div className="content">
               <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/cart'} element={<Cart />} />
                  <Route path={'*'} element={<NotFound />} />
               </Routes>
            </div>
      </div>
   );
}

export default App;
