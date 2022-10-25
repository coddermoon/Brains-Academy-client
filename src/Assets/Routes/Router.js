import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Courses from "../../pages/Courses/Courses";
import CourseCard from "../../pages/Courses/CoursesCard/CourseCard";
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
                path:'/courses',
                element: <Courses title="Our Courses"/>,
                children:[
                    {
                        path:'/courses',
                        element:<CourseCard/>
                    }
                ]
            },
        
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    
])