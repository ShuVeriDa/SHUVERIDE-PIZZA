import {FC, memo} from "react";


type CategoriesPropsType = {
   categoryID: number
   onClickCategory: (categoryID: number) => void
}
export const Categories: FC<CategoriesPropsType> = memo(({categoryID, onClickCategory}) => {

   const categories: string[] = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

   return (
      <div className="categories">
         <ul>
            {categories.map((categoryName, index) => {
               return <li key={index}
                          onClick={() => onClickCategory(index)}
                          className={categoryID === index ? "active" : ''}
               >
                  {categoryName}
               </li>
            })}
         </ul>
      </div>
   )
})