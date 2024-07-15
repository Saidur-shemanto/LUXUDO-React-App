
import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PropertyDetails from "../pages/propertyDetail/PropertyDetail";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/userProfile/UserProfile";
import PropertyLists from "../pages/propertyList/PropertyLists";
import ErrorPage from "../pages/errorPage/ErrorPage";
const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/properties',
                element: <PropertyLists></PropertyLists>
            },
            {
                path: '/properties/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('/propertyList.JSON')

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile/:id',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }

        ]
    },
]);

export default PublicRoutes;
