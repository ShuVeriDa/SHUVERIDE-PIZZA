import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import debounce from 'lodash.debounce';
import {useDispatch} from "react-redux";

import classes from './Search.module.scss'
import {setSearchValue} from "../../redux/slices/filterSlice";

type SearchPropsType = {}

export const Search: FC<SearchPropsType> = () => {
   const dispatch = useDispatch()
   const [value, setValue] = useState<string>('')
   const inputRef = useRef<HTMLInputElement>(null)

   const onClickRemoveTextSearch = () => {
      dispatch(setSearchValue(''))
      setValue('')
      inputRef.current?.focus()
   }

   const updateSearchValue = useCallback(
      debounce((str: string) => {
         dispatch(setSearchValue(str))
      }, 350), []
   )

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
      updateSearchValue(e.currentTarget.value)
   }

   return (
      <div className={classes.root}>
         <svg className={classes.icon}
              enableBackground="new 0 0 32 32"
              id="Editable-line"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
         >
            <circle cx="14"
                    cy="14"
                    fill="none"
                    id="XMLID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
            />
            <line fill="none"
                  id="XMLID_44_"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  x1="27"
                  x2="20.366"
                  y1="27"
                  y2="20.366"
            />
         </svg>
         <input ref={inputRef}
                type="text"
                placeholder='Поиск пиццы...'
                className={classes.input}
                value={value}
                onChange={onChangeInput}
         />
         {value && <svg className={classes.clearIcon}
                              onClick={onClickRemoveTextSearch}
                              height="48"
                              viewBox="0 0 48 48"
                              width="48"
                              xmlns="http://www.w3.org/2000/svg"
         >
             <path
                 d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
             <path d="M0 0h48v48h-48z" fill="none"/>
         </svg>}

      </div>
   );
};
