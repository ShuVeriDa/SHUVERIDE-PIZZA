import {useNavigate, useParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import axios from "axios";

import {PizzaType} from "../redux/slices/pizzaSlice";

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
   const [pizza, setPizza] = useState<PizzaType>()
   const {id} = useParams()
   const navigate = useNavigate()

   useEffect(() => {
      async function fetchPizza() {
         try {
            const res = await axios.get(`https://630a32f93249910032824d12.mockapi.io/items/${id}`)
            setPizza(res.data)
         } catch (error) {
            alert('Ошибка при получении пиццы!')
            navigate('/')
         }
      }

      fetchPizza()
   },[])

   if (!pizza) {
      return <>Loading...</>
   }
   return (
      <div className='container'>
         <img src={pizza.imageUrl} alt=""/>
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
      </div>
   );
};
