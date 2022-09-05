import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {PizzaType} from "../App";

export const FullPizza = () => {
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
      return <h4>Loading...</h4>
   }
   return (
      <div className='container'>
         <img src={pizza.imageUrl} alt=""/>
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
      </div>
   );
};
