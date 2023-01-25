import Main from "../layout/Main";
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/home',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <Register></Register>
            },



        ]

    }
])

export default router;