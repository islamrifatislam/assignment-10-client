import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
     {
          path:"/",
          element:<MainLayout/>,
          children:[
               {
                    index:true,
                    element:<Home/>
               }
          ]
     }
])

export default Router