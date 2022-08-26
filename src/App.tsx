import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {PizzaBlock} from "./components/PizzaBlock";
import {Sort} from "./components/Sort";


function App() {
   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <div className="container">
               <div className="contentTop">
                  <Categories/>
                  <Sort />
               </div>
               <h2 className="contentTitle">Все пиццы</h2>
               <div className="contentItems">
                  <PizzaBlock title={'Мексиканская'} price={500}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
