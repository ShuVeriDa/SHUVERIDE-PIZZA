import {Link} from "react-router-dom";
import cartEmptyImg from '../assets/img/empty-cart.png'

export const CartEmpty = () => {
   return (
      <>
         <div className='cart cartEmpty'>
            <h2>Корзина пуста 😕</h2>
            <p>
               Вероятней всего, вы не заказывали еще пиццу. <br/>
               Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImg} alt="EmptyCart" className='button buttonBlack'/>
            <Link to='/'>
               <span>Вернуться назад</span>
            </Link>
         </div>
      </>
   );
};

