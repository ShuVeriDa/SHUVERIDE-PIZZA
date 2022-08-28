import classes from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
   return (
      <div className={classes.root}>
         <h1>
            <span>😕</span>
            <br/>
            Ничего не найдено
         </h1>
         <p className={classes.description}>К сожалению данная страница отсутствует</p>
      </div>

   );
};
