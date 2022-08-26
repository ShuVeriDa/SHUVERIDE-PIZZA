import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";


function App() {
   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <div className="container">
               <div className="content__top">
                  <Categories/>

               </div>
               <h2 className="content__title">Все пиццы</h2>
               <div className="content__items">
                  {/*<% include components/pizza-block.ejs %> <% include components/pizza-block.ejs %> <%*/}
                  {/*include components/pizza-block.ejs %> <% include components/pizza-block.ejs %> <%*/}
                  {/*include components/pizza-block.ejs %> <% include components/pizza-block.ejs %> <%*/}
                  {/*include components/pizza-block.ejs %> <% include components/pizza-block.ejs %> <%*/}
                  {/*include components/pizza-block.ejs %>*/}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
