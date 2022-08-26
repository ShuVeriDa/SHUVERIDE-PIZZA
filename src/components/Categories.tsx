import React from "react";

type CategoriesPropsType = {}
export const Categories: React.FC<CategoriesPropsType> = () => {
   return (
      <div className="categories">
         <ul>
            <li className="active">Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
         </ul>
      </div>
   )
}