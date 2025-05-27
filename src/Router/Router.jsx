import { createBrowserRouter } from "react-router";
import NotFound from "../components/NotFound";
import MainLayout from "../Layout/MainLayout";
import AddVisa from "../Pages/AddVisa/AddVisa";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import VisaDetails from "../Pages/VisaDetails/VisaDetails";

const Router = createBrowserRouter([
     {
          path:"/",
          element:<MainLayout/>,
          errorElement:<NotFound/>,
          children:[
               {
                    index:true,
                    element:<Home/>
               },
               {
                    path:"/add-visa",
                    element:<AddVisa/>
               },
               {
                    path:"/all-visa/:id",
                    element:<VisaDetails/>
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