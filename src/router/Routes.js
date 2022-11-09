import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Service from "../pages/Service/Service";

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
                path:"/blog",
                element:<Blog></Blog>
            }
        ]
    }
])