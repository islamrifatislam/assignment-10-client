import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../components/NotFound";

const Router = createBrowserRouter([
     {
          path:"/",
          element:<MainLayout/>,
          errorElement:<NotFound/>,
          children:[
               {
                    index:true,
                    element:<Home/>
               }
          ]
     },
     {
          path:"/login",
          element:<Login/>
     },
     {
          path:"/register",
          element:<Register/>
     }
])

export default Router