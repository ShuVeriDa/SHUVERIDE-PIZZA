import {Route, Routes} from "react-router-dom";

import './scss/app.scss';
import {MainLayout} from "./layouts/MainLayout";
import {FullPizza} from "./pages/FullPizza";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";

export type PizzaType = {
   id: string
   imageUrl: string
   title: string
   types: number[]
   sizes: number[]
   price: number
   category: number
   rating: number
   count: number
}

function App() {
   return (
      <Routes>
         <Route path={'/'} element={<MainLayout/>}>
            <Route path={''} element={<Home/>}/>
            <Route path={'cart'} element={<Cart/>}/>
            <Route path={'pizza/:id'} element={<FullPizza/>}/>
            <Route path={'*'} element={<NotFound/>}/>
         </Route>
      </Routes>
   );
}

export default App;
