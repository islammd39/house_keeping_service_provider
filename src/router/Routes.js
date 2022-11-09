import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Service from "../pages/Home/Service/Service";
import ServiceDetails from "../pages/Home/Service/ServiceDetails";
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/service",
                element:<Service></Service>
            },
            {
                path:"/serviceDetails/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element: <SignUp></SignUp>
            },
            {
                path:"*",
                element:<PageNotFound></PageNotFound>
            }
        ]
    }
])