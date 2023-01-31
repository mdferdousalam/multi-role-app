import Main from "../layout/Main";
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import DashboardLayout from "../layout/DashBoardLayout";
import Welcome from "../components/pages/Welcome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AllStudents from "../components/pages/AllStudents";
import AllConsultants from "../components/pages/AllConsultants";
import AllAdmins from "../components/pages/AllAdmins";



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
                loader: () => fetch('https://multi-role-server.vercel.app/users')

            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/students',
                element: <AllStudents></AllStudents>
            },
            {
                path: '/dashboard/consultants',
                element: <AllConsultants></AllConsultants>,
                loader: () => fetch('https://multi-role-server.vercel.app/users/consultants')
            },
            {
                path: '/dashboard/admins',
                element: <AdminRoute><AllAdmins></AllAdmins></AdminRoute>
            }
        ]
    }
])

export default router;