import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";

import Login from "../../pages/Login/Login";
import NotFound from "../../pages/shared/NotFound/NotFound";
import Signup from "../../pages/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/login',
                loader:()=> fetch('http://localhost:5000'),
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },
            {
                path:'/',
                element: <Home/>
            },
        
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    
])