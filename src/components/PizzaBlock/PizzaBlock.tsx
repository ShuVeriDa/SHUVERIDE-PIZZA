import {FC, useState} from 'react';

export type PizzaBlockPropsType = {
   id: number,
   imageUrl: string,
   title: string,
   types: number[],
   sizes: number[],
   price: number,
   category: number,
   rating: number
}


export const PizzaBlock: FC<PizzaBlockPropsType> = (
   {
      title, price, types, id,
      rating, category, sizes, imageUrl
   }) => {
   const [activeType, setActiveType] = useState<number>(0)
   const [activeSizes, setActiveSizes] = useState<number>(0)
   const typesName = ['тонкое', "традиционное"]

   return (
      <div className="pizzaBlock">
         <img
            className="pizzaBlockImage"
            src={imageUrl}
            alt="Pizza"
         />
         <h4 className="pizzaBlockTitle">{title}</h4>
         <div className="pizzaBlockSelector">
            <ul>
               {types.map(typeId => (
                  <li key={typeId}
                      onClick={() => setActiveType(typeId)}
                      className={activeType === typeId ? 'active' : ''}
                  >
                     {typesName[typeId]}
                  </li>
               ))}
            </ul>
            <ul>
               {sizes.map((size, index) => (
                  <li key={size}
                      onClick={() => setActiveSizes(index)}
                      className={activeSizes === index ? 'active' : ''}
                  >
                     {size} см.
                  </li>
               ))}
            </ul>
         </div>
         <div className="pizzaBlockBottom">
            <div className="pizzaBlockPrice">от {price} ₽</div>
            <button className="button buttonOutline buttonAdd">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  />
               </svg>
               <span>Добавить</span>
               <i>0</i>
            </button>
         </div>
      </div>
   );
};