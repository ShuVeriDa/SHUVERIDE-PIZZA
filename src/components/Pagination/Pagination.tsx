import {FC} from "react";

import ReactPaginate from "react-paginate";
import classes from './Pagination.module.scss'


type PaginationPropsType = {
   onChangePage: (currentPage: number) => void
}

export const Pagination: FC<PaginationPropsType> = ({onChangePage}) => {
   return (
      <ReactPaginate
         className={classes.root}
         breakLabel="..."
         nextLabel=">"
         previousLabel="<"
         onPageChange={(e) => onChangePage(e.selected + 1)}
         pageRangeDisplayed={4}
         pageCount={3}
         // forcePage={currentPage - 1}
         // renderOnZeroPageCount={null}
      />
   );
};