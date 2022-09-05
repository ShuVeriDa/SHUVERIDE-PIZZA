import {Header} from "../components/Header";
import {FC} from "react";
import {Outlet} from "react-router-dom";

type MainLayoutPropsType = {

}

export const MainLayout: FC<MainLayoutPropsType> = () => {
   return (
      <div className='wrapper'>
         <Header />
         <div className="content">
            <Outlet />
         </div>
      </div>
   );
};

