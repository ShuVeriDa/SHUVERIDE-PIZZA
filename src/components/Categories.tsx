import React, {useState} from "react";

type CategoriesPropsType = {}
export const Categories: React.FC<CategoriesPropsType> = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0)

   const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

   return (
      <div className="categories">
         <ul>
            {categories.map((value, index) => {
               return <li key={index}
                          onClick={() => setActiveIndex(index)}
                          className={activeIndex === index ? "active" : ''}
               >
                  {value}
               </li>
            })}
         </ul>
      </div>
   )
}