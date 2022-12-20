import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Blogs from "../../pages/Blogs/Blogs";
import Checkout from "../../pages/Checkout/Checkout";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import CourseCard from "../../pages/Courses/CoursesCard/CourseCard";
import Home from "../../pages/Home/Home";

import Login from "../../pages/Login/Login";
import NotFound from "../../pages/shared/NotFound/NotFound";
import Signup from "../../pages/Signup/Signup";
import PrivetRoute from "./PrivetRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            
                    {
                        path:'/checkout/:id',
                        loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`) ,
                        element: <Checkout/>
                    },

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
                    },
                    {
                        path:'/courses/:id',
                        loader:({params})=> fetch(`http://localhost:5000/course/${params.id}`) ,
                        element:<PrivetRoute> <CourseDetails/></PrivetRoute>
                    }
                   
                ]
            },
        
            {
                path:'/blog',
                loader:()=> fetch('http://localhost:5000/blogs'),
                element: <Blogs/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    
])